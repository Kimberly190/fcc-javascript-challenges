// using array to ensure descending order
let cashMap = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.10],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];

function getOneCash(unitName, denom, cid) {
  let drawer = cid.find(d => d[0] === unitName);
  if (drawer[1] > 0) {
    drawer[1] = drawer[1] - denom;
    //console.log('got cash out: ' , unitName, ', ', denom);
    return true;
  }
  //console.log('not enough of denom ' + denom);
  return false;
}

function checkCashRegister(price, cash, cid) {
  let change = [];
  let changeDue = cash - price;
  
  // just give them the drawer
  if (cid.map(d => d[1]).reduce((sum, d) => sum + d) == changeDue) {
    return {
      status: 'CLOSED',
      change: cid
    };
  }

  for (let i = 0; i < cashMap.length; i++) {
    let unitName = cashMap[i][0], denom = cashMap[i][1];
    
    let unitToGive = [unitName, 0];
    while (changeDue >= denom) {
      if (getOneCash(unitName, denom, cid)) {
        changeDue = (changeDue - denom).toFixed(2); //to avoid precision inconsistencies due to JS fail!
        unitToGive[1] += denom; // introduces precision issues for many +.01s,, see fix at end
      } else { // none avail. of this denom
        break;
      }
    }

    if (unitToGive[1] > 0) {
      if (unitName == 'PENNY') {
        // fix precision issue by rounding to 2 decimal places
        // then meet test persnicketiness by using parseFloat to remove trailing zeroes
        unitToGive[1] = parseFloat(Number(unitToGive[1]).toFixed(2));
      }
      change.push(unitToGive);
    }

  }
  
  if (changeDue == 0) {
    return {
      status: 'OPEN',
      change: change
    };
  }
  
  return {
    status: 'INSUFFICIENT_FUNDS',
    change: []
  };
}

let result;
//result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//console.log(result);
//result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//console.log(result);
result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result);
//result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//console.log(result);
result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0.05], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result);
