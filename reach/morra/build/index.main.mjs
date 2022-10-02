// Automatically generated with Reach 0.1.12 (816420cc)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (816420cc)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v503 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v504 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v504, v503],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:74:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v504, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v508, v509], secs: v511, time: v510, didSend: v73, from: v507 } = txn1;
      
      sim_r.txns.push({
        amt: v508,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v520 = stdlib.safeAdd(v510, v509);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v508, v509], secs: v511, time: v510, didSend: v73, from: v507 } = txn1;
  ;
  const v520 = stdlib.safeAdd(v510, v509);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v520],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v507, v508, v509, v520],
      evt_cnt: 0,
      funcNum: 2,
      lct: v510,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v507,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:66:29:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:82:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v526, time: v525, didSend: v82, from: v524 } = txn2;
    const v528 = stdlib.add(v508, v508);
    ;
    let v529 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v530 = v525;
    let v537 = v528;
    
    let txn3 = txn2;
    while (await (async () => {
      const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v545;})()) {
      const v552 = stdlib.safeAdd(v530, v509);
      const v556 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:91:46:application',
        fs: ['at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
        msg: 'getFinger',
        who: 'Alice'
        });
      const v557 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:92:44:application',
        fs: ['at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v558 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:93:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v559 = stdlib.digest([ctc0, ctc0], [v558, v556]);
      const v561 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:95:63:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:89:15:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v562 = stdlib.digest([ctc0, ctc0], [v561, v557]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v507, v508, v509, v524, v537, v552, v559],
        evt_cnt: 1,
        funcNum: 4,
        lct: v530,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:99:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v565], secs: v567, time: v566, didSend: v113, from: v564 } = txn4;
          
          ;
          const v575 = stdlib.safeAdd(v566, v509);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v552],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v507, v508, v509, v524, v537, v552],
          evt_cnt: 0,
          funcNum: 5,
          lct: v530,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v524,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn5;
        ;
        const v779 = stdlib.addressEq(v507, v776);
        const v780 = stdlib.addressEq(v524, v776);
        const v781 = v779 ? true : v780;
        stdlib.assert(v781, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:66:29:application',
          fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v565], secs: v567, time: v566, didSend: v113, from: v564 } = txn4;
        ;
        const v568 = stdlib.addressEq(v507, v564);
        stdlib.assert(v568, {
          at: './index.rsh:99:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v575 = stdlib.safeAdd(v566, v509);
        const txn5 = await (ctc.sendrecv({
          args: [v507, v508, v509, v524, v537, v565, v575, v562],
          evt_cnt: 1,
          funcNum: 6,
          lct: v566,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:103:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v578], secs: v580, time: v579, didSend: v119, from: v577 } = txn5;
            
            ;
            const v588 = stdlib.safeAdd(v579, v509);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v575],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v507, v508, v509, v524, v537, v565, v575],
            evt_cnt: 0,
            funcNum: 7,
            lct: v566,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v524,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn6;
          ;
          const v761 = stdlib.addressEq(v507, v758);
          const v762 = stdlib.addressEq(v524, v758);
          const v763 = v761 ? true : v762;
          stdlib.assert(v763, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:104:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:66:29:application',
            fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:104:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v578], secs: v580, time: v579, didSend: v119, from: v577 } = txn5;
          ;
          const v581 = stdlib.addressEq(v507, v577);
          stdlib.assert(v581, {
            at: './index.rsh:103:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v588 = stdlib.safeAdd(v579, v509);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v588],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v507, v508, v509, v524, v537, v565, v578, v588],
              evt_cnt: 0,
              funcNum: 9,
              lct: v579,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v507,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn7;
            ;
            const v743 = stdlib.addressEq(v507, v740);
            const v744 = stdlib.addressEq(v524, v740);
            const v745 = v743 ? true : v744;
            stdlib.assert(v745, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:117:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:66:29:application',
              fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:117:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v595], secs: v597, time: v596, didSend: v130, from: v594 } = txn6;
            ;
            const v598 = stdlib.addressEq(v524, v594);
            stdlib.assert(v598, {
              at: './index.rsh:116:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v605 = stdlib.safeAdd(v596, v509);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v605],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v507, v508, v509, v524, v537, v565, v578, v595, v605],
                evt_cnt: 0,
                funcNum: 11,
                lct: v596,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v507,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn8;
              ;
              const v725 = stdlib.addressEq(v507, v722);
              const v726 = stdlib.addressEq(v524, v722);
              const v727 = v725 ? true : v726;
              stdlib.assert(v727, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:66:29:application',
                fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v608], secs: v610, time: v609, didSend: v136, from: v607 } = txn7;
              ;
              const v611 = stdlib.addressEq(v524, v607);
              stdlib.assert(v611, {
                at: './index.rsh:120:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v618 = stdlib.safeAdd(v609, v509);
              const txn8 = await (ctc.sendrecv({
                args: [v507, v508, v509, v524, v537, v565, v578, v595, v608, v618, v558, v556],
                evt_cnt: 2,
                funcNum: 12,
                lct: v609,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:138:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v623, v624], secs: v626, time: v625, didSend: v146, from: v622 } = txn8;
                  
                  ;
                  const v636 = stdlib.safeAdd(v625, v509);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v618],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v507, v508, v509, v524, v537, v565, v578, v595, v608, v618],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v609,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v524,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn9;
                ;
                const v707 = stdlib.addressEq(v507, v704);
                const v708 = stdlib.addressEq(v524, v704);
                const v709 = v707 ? true : v708;
                stdlib.assert(v709, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:66:29:application',
                  fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v623, v624], secs: v626, time: v625, didSend: v146, from: v622 } = txn8;
                ;
                const v627 = stdlib.addressEq(v507, v622);
                stdlib.assert(v627, {
                  at: './index.rsh:138:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v628 = stdlib.digest([ctc0, ctc0], [v623, v624]);
                const v629 = stdlib.digestEq(v565, v628);
                stdlib.assert(v629, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:140:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v636 = stdlib.safeAdd(v625, v509);
                const txn9 = await (ctc.sendrecv({
                  args: [v507, v508, v509, v524, v537, v578, v595, v608, v624, v636, v561, v557],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v625,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:143:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v639, v640], secs: v642, time: v641, didSend: v156, from: v638 } = txn9;
                    
                    ;
                    const v652 = stdlib.safeAdd(v641, v509);
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v636],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v507, v508, v509, v524, v537, v578, v595, v608, v624, v636],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v625,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v524,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn10;
                  ;
                  const v689 = stdlib.addressEq(v507, v686);
                  const v690 = stdlib.addressEq(v524, v686);
                  const v691 = v689 ? true : v690;
                  stdlib.assert(v691, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:144:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:66:29:application',
                    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:144:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v639, v640], secs: v642, time: v641, didSend: v156, from: v638 } = txn9;
                  ;
                  const v643 = stdlib.addressEq(v507, v638);
                  stdlib.assert(v643, {
                    at: './index.rsh:143:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v644 = stdlib.digest([ctc0, ctc0], [v639, v640]);
                  const v645 = stdlib.digestEq(v578, v644);
                  stdlib.assert(v645, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:145:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v652 = stdlib.safeAdd(v641, v509);
                  const v656 = stdlib.safeAdd(v624, v595);
                  stdlib.protect(ctc2, await interact.seeWinning(v656), {
                    at: './index.rsh:150:26:application',
                    fs: ['at ./index.rsh:148:15:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn10 = await (ctc.sendrecv({
                    args: [v507, v508, v509, v524, v537, v595, v608, v624, v640, v652, v656],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v641,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:153:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v658], secs: v660, time: v659, didSend: v169, from: v657 } = txn10;
                      
                      ;
                      let v662;
                      const v663 = stdlib.eq(v640, v608);
                      if (v663) {
                        v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v664 = stdlib.safeAdd(v624, v595);
                        const v665 = stdlib.eq(v640, v664);
                        if (v665) {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          const v667 = stdlib.eq(v608, v664);
                          if (v667) {
                            v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv529 = v662;
                      const cv530 = v659;
                      const cv537 = v537;
                      
                      await (async () => {
                        const v529 = cv529;
                        const v530 = cv530;
                        const v537 = cv537;
                        
                        if (await (async () => {
                          const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                          
                          return v545;})()) {
                          const v552 = stdlib.safeAdd(v530, v509);
                          sim_r.isHalt = false;
                          }
                        else {
                          const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                          const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:170:12:decimal', stdlib.UInt_max, '2'), v508);
                          const v799 = v794 ? v507 : v524;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v799,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v652],
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v507, v508, v509, v524, v537, v595, v608, v624, v640, v652],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v641,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v507,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn11;
                    ;
                    const v671 = stdlib.addressEq(v507, v668);
                    const v672 = stdlib.addressEq(v524, v668);
                    const v673 = v671 ? true : v672;
                    stdlib.assert(v673, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:154:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc2, await interact.informTimeout(), {
                      at: './index.rsh:66:29:application',
                      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:154:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v658], secs: v660, time: v659, didSend: v169, from: v657 } = txn10;
                    ;
                    const v661 = stdlib.addressEq(v507, v657);
                    stdlib.assert(v661, {
                      at: './index.rsh:153:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v662;
                    const v663 = stdlib.eq(v640, v608);
                    if (v663) {
                      v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v664 = stdlib.safeAdd(v624, v595);
                      const v665 = stdlib.eq(v640, v664);
                      if (v665) {
                        v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v667 = stdlib.eq(v608, v664);
                        if (v667) {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv529 = v662;
                    const cv530 = v659;
                    const cv537 = v537;
                    
                    v529 = cv529;
                    v530 = cv530;
                    v537 = cv537;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:170:12:decimal', stdlib.UInt_max, '2'), v508);
    const v799 = v794 ? v507 : v524;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v529), {
      at: './index.rsh:174:24:application',
      fs: ['at ./index.rsh:173:7:application call to [unknown function] (defined at: ./index.rsh:173:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v508, v509], secs: v511, time: v510, didSend: v73, from: v507 } = txn1;
  ;
  const v520 = stdlib.safeAdd(v510, v509);
  stdlib.protect(ctc1, await interact.acceptWager(v508), {
    at: './index.rsh:79:25:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v507, v508, v509, v520],
    evt_cnt: 0,
    funcNum: 1,
    lct: v510,
    onlyIf: true,
    out_tys: [],
    pay: [v508, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v526, time: v525, didSend: v82, from: v524 } = txn2;
      
      const v528 = stdlib.add(v508, v508);
      sim_r.txns.push({
        amt: v508,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v529 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v530 = v525;
      const v537 = v528;
      
      if (await (async () => {
        const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v545;})()) {
        const v552 = stdlib.safeAdd(v530, v509);
        sim_r.isHalt = false;
        }
      else {
        const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:170:12:decimal', stdlib.UInt_max, '2'), v508);
        const v799 = v794 ? v507 : v524;
        sim_r.txns.push({
          kind: 'from',
          to: v799,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v520],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v507, v508, v509, v520],
      evt_cnt: 0,
      funcNum: 2,
      lct: v510,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v507,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:66:29:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:82:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v526, time: v525, didSend: v82, from: v524 } = txn2;
    const v528 = stdlib.add(v508, v508);
    ;
    let v529 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v530 = v525;
    let v537 = v528;
    
    let txn3 = txn2;
    while (await (async () => {
      const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v545;})()) {
      const v552 = stdlib.safeAdd(v530, v509);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v552],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v507, v508, v509, v524, v537, v552],
          evt_cnt: 0,
          funcNum: 5,
          lct: v530,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v524,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn5;
        ;
        const v779 = stdlib.addressEq(v507, v776);
        const v780 = stdlib.addressEq(v524, v776);
        const v781 = v779 ? true : v780;
        stdlib.assert(v781, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:66:29:application',
          fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v565], secs: v567, time: v566, didSend: v113, from: v564 } = txn4;
        ;
        const v568 = stdlib.addressEq(v507, v564);
        stdlib.assert(v568, {
          at: './index.rsh:99:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v575 = stdlib.safeAdd(v566, v509);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v575],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v507, v508, v509, v524, v537, v565, v575],
            evt_cnt: 0,
            funcNum: 7,
            lct: v566,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v524,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn6;
          ;
          const v761 = stdlib.addressEq(v507, v758);
          const v762 = stdlib.addressEq(v524, v758);
          const v763 = v761 ? true : v762;
          stdlib.assert(v763, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:104:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:66:29:application',
            fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:104:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v578], secs: v580, time: v579, didSend: v119, from: v577 } = txn5;
          ;
          const v581 = stdlib.addressEq(v507, v577);
          stdlib.assert(v581, {
            at: './index.rsh:103:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v588 = stdlib.safeAdd(v579, v509);
          const v592 = stdlib.protect(ctc0, await interact.getFinger(), {
            at: './index.rsh:112:54:application',
            fs: ['at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:17:function exp)'],
            msg: 'getFinger',
            who: 'Bob'
            });
          const v593 = stdlib.protect(ctc0, await interact.getGuess(), {
            at: './index.rsh:113:52:application',
            fs: ['at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:17:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v507, v508, v509, v524, v537, v565, v578, v588, v592],
            evt_cnt: 1,
            funcNum: 8,
            lct: v579,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:116:9:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v595], secs: v597, time: v596, didSend: v130, from: v594 } = txn6;
              
              ;
              const v605 = stdlib.safeAdd(v596, v509);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v588],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v507, v508, v509, v524, v537, v565, v578, v588],
              evt_cnt: 0,
              funcNum: 9,
              lct: v579,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v507,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn7;
            ;
            const v743 = stdlib.addressEq(v507, v740);
            const v744 = stdlib.addressEq(v524, v740);
            const v745 = v743 ? true : v744;
            stdlib.assert(v745, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:117:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:66:29:application',
              fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:117:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v595], secs: v597, time: v596, didSend: v130, from: v594 } = txn6;
            ;
            const v598 = stdlib.addressEq(v524, v594);
            stdlib.assert(v598, {
              at: './index.rsh:116:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v605 = stdlib.safeAdd(v596, v509);
            const txn7 = await (ctc.sendrecv({
              args: [v507, v508, v509, v524, v537, v565, v578, v595, v605, v593],
              evt_cnt: 1,
              funcNum: 10,
              lct: v596,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:120:9:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v608], secs: v610, time: v609, didSend: v136, from: v607 } = txn7;
                
                ;
                const v618 = stdlib.safeAdd(v609, v509);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v605],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v507, v508, v509, v524, v537, v565, v578, v595, v605],
                evt_cnt: 0,
                funcNum: 11,
                lct: v596,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v507,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn8;
              ;
              const v725 = stdlib.addressEq(v507, v722);
              const v726 = stdlib.addressEq(v524, v722);
              const v727 = v725 ? true : v726;
              stdlib.assert(v727, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:66:29:application',
                fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v608], secs: v610, time: v609, didSend: v136, from: v607 } = txn7;
              ;
              const v611 = stdlib.addressEq(v524, v607);
              stdlib.assert(v611, {
                at: './index.rsh:120:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v618 = stdlib.safeAdd(v609, v509);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v618],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v507, v508, v509, v524, v537, v565, v578, v595, v608, v618],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v609,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v524,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn9;
                ;
                const v707 = stdlib.addressEq(v507, v704);
                const v708 = stdlib.addressEq(v524, v704);
                const v709 = v707 ? true : v708;
                stdlib.assert(v709, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:66:29:application',
                  fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v623, v624], secs: v626, time: v625, didSend: v146, from: v622 } = txn8;
                ;
                const v627 = stdlib.addressEq(v507, v622);
                stdlib.assert(v627, {
                  at: './index.rsh:138:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v628 = stdlib.digest([ctc0, ctc0], [v623, v624]);
                const v629 = stdlib.digestEq(v565, v628);
                stdlib.assert(v629, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:140:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v636 = stdlib.safeAdd(v625, v509);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v636],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v507, v508, v509, v524, v537, v578, v595, v608, v624, v636],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v625,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v524,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn10;
                  ;
                  const v689 = stdlib.addressEq(v507, v686);
                  const v690 = stdlib.addressEq(v524, v686);
                  const v691 = v689 ? true : v690;
                  stdlib.assert(v691, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:144:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:66:29:application',
                    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:144:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v639, v640], secs: v642, time: v641, didSend: v156, from: v638 } = txn9;
                  ;
                  const v643 = stdlib.addressEq(v507, v638);
                  stdlib.assert(v643, {
                    at: './index.rsh:143:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v644 = stdlib.digest([ctc0, ctc0], [v639, v640]);
                  const v645 = stdlib.digestEq(v578, v644);
                  stdlib.assert(v645, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:145:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v652 = stdlib.safeAdd(v641, v509);
                  const txn10 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v652],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v507, v508, v509, v524, v537, v595, v608, v624, v640, v652],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v641,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v507,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn11;
                    ;
                    const v671 = stdlib.addressEq(v507, v668);
                    const v672 = stdlib.addressEq(v524, v668);
                    const v673 = v671 ? true : v672;
                    stdlib.assert(v673, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:154:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:66:29:application',
                      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:64:28:function exp)', 'at ./index.rsh:154:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v658], secs: v660, time: v659, didSend: v169, from: v657 } = txn10;
                    ;
                    const v661 = stdlib.addressEq(v507, v657);
                    stdlib.assert(v661, {
                      at: './index.rsh:153:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v662;
                    const v663 = stdlib.eq(v640, v608);
                    if (v663) {
                      v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v664 = stdlib.safeAdd(v624, v595);
                      const v665 = stdlib.eq(v640, v664);
                      if (v665) {
                        v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v667 = stdlib.eq(v608, v664);
                        if (v667) {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv529 = v662;
                    const cv530 = v659;
                    const cv537 = v537;
                    
                    v529 = cv529;
                    v530 = cv530;
                    v537 = cv537;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:170:12:decimal', stdlib.UInt_max, '2'), v508);
    const v799 = v794 ? v507 : v524;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v529), {
      at: './index.rsh:174:24:application',
      fs: ['at ./index.rsh:173:7:application call to [unknown function] (defined at: ./index.rsh:173:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAVAAFQICgIEXgCBQkNDwuYAQdYoAGQAagBMCYDAQABAQAiNQAxGEEJASpkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQASsSSELDEACf0khDAxAAVhJgRAMQAD+SSEGDEAAViEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABACB0o6wMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQggQSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSVcAIDX/gWBbNf6BcFs1/Uk1BRc1/IAEfoUQcTT8FlCwMgY0AyEHWwxENP8xABJENP00/hJBAAYjNftCAC00A4FoWzQDIRBbCDX6NP00+hJBAAchCDX7QgARNP40+hJBAAYiNftCAAMjNfs0/zQDJVs0AyEEWzQDVzAgNPsyBjQDJFtCBw1IIQw0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gARGR4xesDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IHHEmBDgxAAMZIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+yEHWzX6gYABWzX5gYgBWzX4STUFSSJbNfchBVs19oAEva7n1TT3FlA09hZQsDIGNAMhElsMRDT/MQASRDQDV1ggNPcWNPYWUAESRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUDT2FlA09RZQKEsBVwB/ZylLAVd/AWdIIQY1ATIGNQJCBmtIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQin5cDsDIGNAMhE1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IF/EkhDQxAAR1JgQwMQADDSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXeCA1+iEOWzX5IRFbNfhJNQVJIls19yEFWzX2gATDqpDBNPcWUDT2FlCwMgY0AyETWwxENP8xABJENANXWCA09xY09hZQARJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlA09hZQNPUWUChLAVcAf2cpSwFXfxlnSCEMNQEyBjUCQgVHSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE49k2NbAyBjQDIRFbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBNhJgQoMQACoSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+ld4IDX5IQ5bNfhJNQUXNfeABKeLwgs09xZQsDIGNAMhEVsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCELNQEyBjUCQgRFSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrAyBjQDIQ5bD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCA9ZJIQkMQAHqSSEPDEAA+UkhBQxAAJ9IIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQUXNfiABC/a6R00+BZQsDIGNAMhDlsMRDT8MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIIQ01ATIGNQJCAz5IIQ80ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gATiG7OpsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ICz0mBBgxAAJNIIQ80ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V1ggNfpJNQU1+YAEae47PjT5ULAyBjQDIQdbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQo1ATIGNQJCAlFIIQk0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhEFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5UkhCAxAAM9JgQQMQACISCEJNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhEFsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghDzUBMgY1AkIBayEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRRbD0SxIrIBNAMlW7III7IQNANXACCyB7NCAQ9JIwxAAEdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLAyBjQDIRRbDEQ0/4gBSDQDVwAgNP80AyEEWzEAIzIGNP9JCEIAYEiBoI0GiAEoIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQVbNf6ABKzRH8M0/xZQNP4WULA0/4gA9zIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAfjX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEJNQEyBjUCQgA6sSKyASEINPoLsggjshA0/DT5NP0hCBJNsgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v509",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v509",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v608",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v624",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v640",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v658",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v578",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v595",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v608",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v624",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v640",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v658",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v578",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v595",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002f1338038062002f138339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612b96806200037d6000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b6101136101473660046124d9565b6102a1565b61011361015a3660046124d9565b61055c565b61011361016d3660046124d9565b6106eb565b61011361018036600461250e565b6108a2565b6101136101933660046124d9565b610b2d565b6101136101a636600461250e565b610c88565b6101136101b93660046124d9565b610f13565b3480156101ca57600080fd5b50600154610126565b6101136101e13660046124d9565b611076565b6101136101f43660046124d9565b61120e565b6101136102073660046124d9565b611368565b61011361021a3660046124d9565b6115da565b61011361022d3660046124d9565b611735565b34801561023e57600080fd5b50610247611978565b60405161013092919061252a565b6101136102633660046124d9565b611a15565b6101136102763660046124d9565b611c51565b6101136102893660046124d9565b611dab565b61011361029c3660046124d9565b611f05565b6102b16009600054146026612133565b6102cb813515806102c457506001548235145b6027612133565b6000808055600280546102dd90612587565b80601f016020809104026020016040519081016040528092919081815260200182805461030990612587565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e9190612642565b90506103866040518060200160405280600081525090565b6103978260e0015143106028612133565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516103c89291906126ee565b60405180910390a16103dc34156024612133565b60608201516103f7906001600160a01b031633146025612133565b610405438360400151612159565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b6000554360015590516105319183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610555929190612392565b5050505050565b61056c6001600054146009612133565b6105868135158061057f57506001548235145b600a612133565b60008080556002805461059890612587565b80601f01602080910402602001604051908101604052809291908181526020018280546105c490612587565b80156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b50505050508060200190518101906106299190612715565b905061063c81606001514310600b612133565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161066d92919061278e565b60405180910390a1610686816020015134146008612133565b61068e612416565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526106e6816121ac565b505050565b6106fb600f60005414604b612133565b6107158135158061070e57506001548235145b604c612133565b60008080556002805461072790612587565b80601f016020809104026020016040519081016040528092919081815260200182805461075390612587565b80156107a05780601f10610775576101008083540402835291602001916107a0565b820191906000526020600020905b81548152906001019060200180831161078357829003601f168201915b50505050508060200190518101906107b8919061285e565b90506107cd816101200151431015604d612133565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b33836040516107fe92919061278e565b60405180910390a161081234156049612133565b8051610846906001600160a01b0316331461083c5760608201516001600160a01b0316331461083f565b60015b604a612133565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610887573d6000803e3d6000fd5b506000808055600181905561089e9060029061246f565b5050565b6108b2600f600054146046612133565b6108cc813515806108c557506001548235145b6047612133565b6000808055600280546108de90612587565b80601f016020809104026020016040519081016040528092919081815260200182805461090a90612587565b80156109575780601f1061092c57610100808354040283529160200191610957565b820191906000526020600020905b81548152906001019060200180831161093a57829003601f168201915b505050505080602001905181019061096f919061285e565b90506109876040518060200160405280600081525090565b61099982610120015143106048612133565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d99733846040516109ca92919061287b565b60405180910390a16109de34156043612133565b81516109f6906001600160a01b031633146044612133565b60408051610a4291610a1c91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146045612133565b610a50438360400151612159565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152601160005543600155905161053191839101612927565b610b3d600d600054146040612133565b610b5781351580610b5057506001548235145b6041612133565b600080805560028054610b6990612587565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9590612587565b8015610be25780601f10610bb757610100808354040283529160200191610be2565b820191906000526020600020905b815481529060010190602001808311610bc557829003601f168201915b5050505050806020019051810190610bfa919061285e565b9050610c0f8161012001514310156042612133565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c4092919061278e565b60405180910390a1610c543415603e612133565b8051610846906001600160a01b03163314610c7e5760608201516001600160a01b03163314610c81565b60015b603f612133565b610c98600d60005414603b612133565b610cb281351580610cab57506001548235145b603c612133565b600080805560028054610cc490612587565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf090612587565b8015610d3d5780601f10610d1257610100808354040283529160200191610d3d565b820191906000526020600020905b815481529060010190602001808311610d2057829003601f168201915b5050505050806020019051810190610d55919061285e565b9050610d6d6040518060200160405280600081525090565b610d7f8261012001514310603d612133565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610db092919061287b565b60405180910390a1610dc434156038612133565b8151610ddc906001600160a01b031633146039612133565b60408051610e2891610e0291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a612133565b610e36438360400151612159565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f60005543600155905161053191839101612927565b610f23600160005414600d612133565b610f3d81351580610f3657506001548235145b600e612133565b600080805560028054610f4f90612587565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7b90612587565b8015610fc85780601f10610f9d57610100808354040283529160200191610fc8565b820191906000526020600020905b815481529060010190602001808311610fab57829003601f168201915b5050505050806020019051810190610fe09190612715565b9050610ff48160600151431015600f612133565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161102592919061278e565b60405180910390a16110393415600c612133565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610887573d6000803e3d6000fd5b611086600b600054146035612133565b6110a08135158061109957506001548235145b6036612133565b6000808055600280546110b290612587565b80601f01602080910402602001604051908101604052809291908181526020018280546110de90612587565b801561112b5780601f106111005761010080835404028352916020019161112b565b820191906000526020600020905b81548152906001019060200180831161110e57829003601f168201915b50505050508060200190518101906111439190612936565b90506111588161010001514310156037612133565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338360405161118992919061278e565b60405180910390a161119d34156033612133565b80516111d1906001600160a01b031633146111c75760608201516001600160a01b031633146111ca565b60015b6034612133565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610887573d6000803e3d6000fd5b61121e6005600054146017612133565b6112388135158061123157506001548235145b6018612133565b60008080556002805461124a90612587565b80601f016020809104026020016040519081016040528092919081815260200182805461127690612587565b80156112c35780601f10611298576101008083540402835291602001916112c3565b820191906000526020600020905b8154815290600101906020018083116112a657829003601f168201915b50505050508060200190518101906112db91906129bf565b90506112ef8160a001514310156019612133565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161132092919061278e565b60405180910390a161133434156015612133565b8051610846906001600160a01b0316331461135e5760608201516001600160a01b03163314611361565b60015b6016612133565b611378600760005414601c612133565b6113928135158061138b57506001548235145b601d612133565b6000808055600280546113a490612587565b80601f01602080910402602001604051908101604052809291908181526020018280546113d090612587565b801561141d5780601f106113f25761010080835404028352916020019161141d565b820191906000526020600020905b81548152906001019060200180831161140057829003601f168201915b50505050508060200190518101906114359190612a53565b905061144d6040518060200160405280600081525090565b61145e8260c001514310601e612133565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161148f9291906126ee565b60405180910390a16114a33415601a612133565b81516114bb906001600160a01b03163314601b612133565b6114c9438360400151612159565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260096000554360015590516105319183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6115ea6011600054146055612133565b611604813515806115fd57506001548235145b6056612133565b60008080556002805461161690612587565b80601f016020809104026020016040519081016040528092919081815260200182805461164290612587565b801561168f5780601f106116645761010080835404028352916020019161168f565b820191906000526020600020905b81548152906001019060200180831161167257829003601f168201915b50505050508060200190518101906116a7919061285e565b90506116bc8161012001514310156057612133565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed23533836040516116ed92919061278e565b60405180910390a161170134156053612133565b80516111d1906001600160a01b0316331461172b5760608201516001600160a01b0316331461172e565b60015b6054612133565b6117456005600054146012612133565b61175f8135158061175857506001548235145b6013612133565b60008080556002805461177190612587565b80601f016020809104026020016040519081016040528092919081815260200182805461179d90612587565b80156117ea5780601f106117bf576101008083540402835291602001916117ea565b820191906000526020600020905b8154815290600101906020018083116117cd57829003601f168201915b505050505080602001905181019061180291906129bf565b905061181a6040518060200160405280600081525090565b61182b8260a0015143106014612133565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0338460405161185c9291906126ee565b60405180910390a161187034156010612133565b8151611888906001600160a01b031633146011612133565b611896438360400151612159565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610531565b60006060600054600280805461198d90612587565b80601f01602080910402602001604051908101604052809291908181526020018280546119b990612587565b8015611a065780601f106119db57610100808354040283529160200191611a06565b820191906000526020600020905b8154815290600101906020018083116119e957829003601f168201915b50505050509050915091509091565b611a25600b600054146030612133565b611a3f81351580611a3857506001548235145b6031612133565b600080805560028054611a5190612587565b80601f0160208091040260200160405190810160405280929190818152602001828054611a7d90612587565b8015611aca5780601f10611a9f57610100808354040283529160200191611aca565b820191906000526020600020905b815481529060010190602001808311611aad57829003601f168201915b5050505050806020019051810190611ae29190612936565b9050611afa6040518060200160405280600081525090565b611b0c82610100015143106032612133565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611b3d9291906126ee565b60405180910390a1611b513415602e612133565b6060820151611b6c906001600160a01b03163314602f612133565b611b7a438360400151612159565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d60005543600155905161053191839101612927565b611c616007600054146021612133565b611c7b81351580611c7457506001548235145b6022612133565b600080805560028054611c8d90612587565b80601f0160208091040260200160405190810160405280929190818152602001828054611cb990612587565b8015611d065780601f10611cdb57610100808354040283529160200191611d06565b820191906000526020600020905b815481529060010190602001808311611ce957829003601f168201915b5050505050806020019051810190611d1e9190612a53565b9050611d328160c001514310156023612133565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611d6392919061278e565b60405180910390a1611d773415601f612133565b8051610846906001600160a01b03163314611da15760608201516001600160a01b03163314611da4565b60015b6020612133565b611dbb600960005414602b612133565b611dd581351580611dce57506001548235145b602c612133565b600080805560028054611de790612587565b80601f0160208091040260200160405190810160405280929190818152602001828054611e1390612587565b8015611e605780601f10611e3557610100808354040283529160200191611e60565b820191906000526020600020905b815481529060010190602001808311611e4357829003601f168201915b5050505050806020019051810190611e789190612642565b9050611e8c8160e00151431015602d612133565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611ebd92919061278e565b60405180910390a1611ed134156029612133565b80516111d1906001600160a01b03163314611efb5760608201516001600160a01b03163314611efe565b60015b602a612133565b611f156011600054146050612133565b611f2f81351580611f2857506001548235145b6051612133565b600080805560028054611f4190612587565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6d90612587565b8015611fba5780601f10611f8f57610100808354040283529160200191611fba565b820191906000526020600020905b815481529060010190602001808311611f9d57829003601f168201915b5050505050806020019051810190611fd2919061285e565b9050611ff1604051806040016040528060008152602001600081525090565b61200382610120015143106052612133565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee433846040516120349291906126ee565b60405180910390a16120483415604e612133565b8151612060906001600160a01b03163314604f612133565b8160c00151826101000151141561207a57600181526120c6565b61208c8260e001518360a00151612159565b6020820181905261010083015114156120a857600281526120c6565b80602001518260c0015114156120c157600081526120c6565b600181525b6120ce612416565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261212d816121ac565b50505050565b8161089e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826121668382612b07565b91508110156121a65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612150565b92915050565b604080516020810190915260008152602082015151600114156122d0576121e3826020015160200151836000015160400151612159565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061212d929190612392565b6020820151516002146122e8578151606001516122ec565b8151515b6001600160a01b03166108fc61230b6002856000015160200151612333565b6040518115909202916000818181858888f19350505050158015610887573d6000803e3d6000fd5b6000811580612357575082826123498183612b1f565b92506123559083612b3e565b145b6121a65760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401612150565b82805461239e90612587565b90600052602060002090601f0160209004810192826123c05760008555612406565b82601f106123d957805160ff1916838001178555612406565b82800160010185558215612406579182015b828111156124065782518255916020019190600101906123eb565b506124129291506124ac565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161246a60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461247b90612587565b6000825580601f1061248b575050565b601f0160209004906000526020600020908101906124a991906124ac565b50565b5b8082111561241257600081556001016124ad565b6000604082840312156124d357600080fd5b50919050565b6000604082840312156124eb57600080fd5b6124f583836124c1565b9392505050565b6000606082840312156124d357600080fd5b60006060828403121561252057600080fd5b6124f583836124fc565b82815260006020604081840152835180604085015260005b8181101561255e57858101830151858201606001528201612542565b81811115612570576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061259b57607f821691505b602082108114156124d357634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156125ee57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156125ee57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461263d57600080fd5b919050565b600061010080838503121561265657600080fd5b6040519081019067ffffffffffffffff8211818310171561268757634e487b7160e01b600052604160045260246000fd5b8160405261269484612626565b815260208401516020820152604084015160408201526126b660608501612626565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152606081016124f5602083018480358252602090810135910152565b60006080828403121561272757600080fd5b6040516080810181811067ffffffffffffffff8211171561275857634e487b7160e01b600052604160045260246000fd5b60405261276483612626565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146127bc57600080fd5b80604085015250509392505050565b600061014082840312156127de57600080fd5b6127e66125bc565b90506127f182612626565b8152602082015160208201526040820151604082015261281360608301612626565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561287157600080fd5b6124f583836127cb565b6001600160a01b0383168152608081016124f560208301848035825260208082013590830152604090810135910152565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516128e760608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b61014081016121a682846128ac565b6000610120828403121561294957600080fd5b6129516125f4565b61295a83612626565b8152602083015160208201526040830151604082015261297c60608401612626565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c082840312156129d157600080fd5b60405160c0810181811067ffffffffffffffff82111715612a0257634e487b7160e01b600052604160045260246000fd5b604052612a0e83612626565b81526020830151602082015260408301516040820152612a3060608401612626565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215612a6557600080fd5b60405160e0810181811067ffffffffffffffff82111715612a9657634e487b7160e01b600052604160045260246000fd5b604052612aa283612626565b81526020830151602082015260408301516040820152612ac460608401612626565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612b1a57612b1a612af1565b500190565b6000816000190483118215151615612b3957612b39612af1565b500290565b600082612b5b57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212207da1fc1111a3a9990dfbae5c59baa24a856b86287dacbafe61a9e30417d8028664736f6c634300080c0033`,
  BytecodeLen: 12051,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:82:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:171:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:88:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:101:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:104:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:117:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:118:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:122:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:139:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:141:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:144:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:146:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:154:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
