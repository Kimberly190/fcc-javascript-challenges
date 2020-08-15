/*
Valid formats:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {
  return /^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(str);
};

export { telephoneCheck };

// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("1 456 789 4444"));
// console.log(telephoneCheck("0 (757) 622-7382"));
// console.log(telephoneCheck("1 555)555-5555"));