'reach 0.1';

const [ isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isGuess, ZERO_GUESS, ONE_GUESS, TWO_GUESS, THREE_GUESS, FOUR_GUESS, FIVE_GUESS, SIX_GUESS, SEVEN_GUESS, EIGHT_GUESS, NINE_GUESS, TEN_GUESS ] = makeEnum(11);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (fingerAlice, fingerBob, guessAlice, guessBob) => {

  if(guessAlice == guessBob){
    const result = DRAW;
    return result;
  }
  else if(guessAlice == (fingerAlice + fingerBob)){
    const result = A_WINS;
    return result;
  }
  else if(guessBob == (fingerAlice + fingerBob)){
    const result = B_WINS;
    return result;
  }
  else{
    const result = DRAW;
    return result;
  }
};

assert(winner(ZERO, ONE, TWO_GUESS, ONE_GUESS) == B_WINS);
assert(winner(ONE, ZERO, ONE_GUESS, TWO_GUESS)== A_WINS);
assert(winner(ZERO, ONE, TWO_GUESS, THREE_GUESS)== DRAW);
assert(winner(TWO, TWO, THREE_GUESS, THREE_GUESS)== DRAW);

forall(UInt, fingerAlice =>
  forall(UInt, fingerBob =>
    forall(UInt, guessAlice =>
      forall(UInt, guessBob =>
        assert(isOutcome(winner(fingerAlice, fingerBob, guessAlice, guessBob)))))));

forall(UInt, (fingerAlice) =>
  forall(UInt, (fingerBob) =>       
    forall(UInt, (guess) =>
      assert(winner(fingerAlice, fingerBob, guess, guess) == DRAW)))); 

const Player = {
  ...hasRandom, // <--- new!
  getFinger: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt, 
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  var outcome = DRAW;      
  invariant(balance() == 2 * wager && isOutcome(outcome) );
  // loop until we have a winner
  while ( outcome == DRAW ) {
    commit();
    Alice.only(() => {
      //const wager = declassify(interact.wager);
      const _fingerAlice = interact.getFinger();
      const _guessAlice = interact.getGuess();
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _fingerAlice);
      const commitAlice = declassify(_commitAlice);
      const [_comGuessAlice, _saltGuessAlice] = makeCommitment(interact, _guessAlice);
      const comGuessAlice = declassify(_comGuessAlice);

    });
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    Alice.publish(comGuessAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();


    unknowable(Bob, Alice(_fingerAlice, _saltAlice));
    unknowable(Bob, Alice(_guessAlice, _saltAlice));
    Bob.only(() => {
      //interact.acceptWager(wager);
      const fingerBob = declassify(interact.getFinger());
      const guessBob = declassify(interact.getGuess());
    });

    Bob.publish(fingerBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Bob.publish(guessBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const fingerAlice = declassify(_fingerAlice);
      const saltGuessAlice = declassify(_saltGuessAlice);
      const guessAlice = declassify(_guessAlice);
    });

    Alice.publish(saltAlice, fingerAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, fingerAlice);
    commit();

    Alice.publish(saltGuessAlice, guessAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(comGuessAlice, saltGuessAlice, guessAlice);

    outcome = winner(fingerAlice, fingerBob, guessAlice, guessBob);
    continue; 
  }

  // const outcome = winner(fingerAlice, fingerBob);
  // const                 [forAlice, forBob] =
  //   outcome == A_WINS ? [       2,      0] :
  //   outcome == B_WINS ? [       0,      2] :
  //   /* tie           */ [       1,      1];
  // transfer(forAlice * wager).to(Alice);
  // transfer(forBob   * wager).to(Bob);
  // commit();

  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
