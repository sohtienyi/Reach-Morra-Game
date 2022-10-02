import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFinger = class extends React.Component {
  render() {
    const {parent, playable, finger} = this.props;
    return (
      <div>
        {finger ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {'Please select the number of finger(s).'}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('ZERO')}
        >Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('ONE')}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('TWO')}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('THREE')}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('FOUR')}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('FIVE')}
        >Five</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {'Please select the number of your guess.'}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ZERO_GUESS')}
        >Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ONE_GUESS')}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TWO_GUESS')}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('THREE_GUESS')}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FOUR_GUESS')}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FIVE_GUESS')}
        >Five</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SIX_GUESS')}
        >Six</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SEVEN_GUESS')}
        >Seven</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('EIGHT_GUESS')}
        >Eight</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('NINE_GUESS')}
        >Nine</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TEN_GUESS')}
        >Ten</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

// exports.WinningNum = class extends React.Component {
//   render() {
//     const {winningNum} = this.props;
//     return (
//       <div>
//         The total number of the finger(s) in this game was:
//         <br />{winningNum || 'Unknown'}
//       </div>
//     );
//   }
// }

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;