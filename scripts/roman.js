const map = [
  ['I', 'V'],
  ['X', 'L'],
  ['C', 'D'],
  ['M', 'V']
];

function convertToRoman(num) {
  let chars = [];
  let mapIndex = 0;
  while (num > 0) {

    let place = num % 10;
    if (place == 9) {
      // special case for 9
      chars.unshift(map[mapIndex][0] + map[mapIndex + 1][0])
    } else if (place == 4) {
      // special case for 4
      chars.unshift(map[mapIndex][0] + map[mapIndex][1]);
    } else {
      //1,2,3,6,7,8
      // add Is, Xs, etc.
      for (let i = 1; i <= place % 5; i++) {
        chars.unshift(map[mapIndex][0]);
      }
      if (place >= 5) {
        // add V, L, etc.
        chars.unshift(map[mapIndex][1]);
      }
    }

    num = Math.floor(num / 10);
    mapIndex++;
  }

  return chars.join('');
};

export { convertToRoman };

// console.log(convertToRoman(36)); //XXXVI
// console.log(convertToRoman(83)); //LXXXIII
// console.log(convertToRoman(501)); //DI
// console.log(convertToRoman(798)); //DCCXCVIII
// console.log(convertToRoman(1023)); //MXXIII
// console.log(convertToRoman(3999)); //MMMCMXCIX