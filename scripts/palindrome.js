 function isPalindrome(str) {
  str = str.replace(/\W|_|\s/g, '').toLowerCase();
  let firstHalf = str.substring(0, str.length / 2);
  let secondHalf = str.substring(Math.ceil(str.length / 2));
  return firstHalf === secondHalf.split('').reverse().join('');
};

export { isPalindrome };