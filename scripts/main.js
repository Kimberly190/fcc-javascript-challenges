import * as palindrome from './palindrome.js';
import * as roman from './roman.js';
import * as caesar from './caesar.js';
import * as telephone from './telephone.js';

function checkPalindrome() {
  let entry = document.getElementById('palindrome').value;
  window.alert(palindrome.isPalindrome(entry) ? "Yes, that's a palindrome!" : "No, that's not a palindrome.");  
}

function convertToRoman() {
  let entry = document.getElementById('number').value;
  window.alert("In Roman numerals, that's " + roman.convertToRoman(parseInt(entry)));
}

function rot13Encode() {
  let entry = document.getElementById('secret').value;
  window.alert("Your encoded message is " + caesar.rot13(entry.toUpperCase()));
}

function validatePhone() {
  let entry = document.getElementById('phone').value;
  window.alert(telephone.telephoneCheck(entry) ? "Valid U.S. phone number." : "Invalid U.S. phone number.");
}

document.querySelector('#check-button').addEventListener('click', checkPalindrome);
document.querySelector('#convert-button').addEventListener('click', convertToRoman);
document.querySelector('#encode-button').addEventListener('click', rot13Encode);
document.querySelector('#validate-button').addEventListener('click', validatePhone);