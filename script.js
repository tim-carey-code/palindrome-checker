function cleanString(str) {
  return str
    .replace(/[0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase()
    .split(" ")
    .join("");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function logSubmit(event) {
  var inputString = input.value;
  var cleanedString = cleanString(inputString); // Changed variable name to 'cleanedString'
  var reversedString = reverseString(cleanedString); // Use the cleanedString variable here

  if (cleanedString === reversedString) {
    // Use the cleanedString variable here
    result.textContent = `Your submission "${input.value}", is a palindrome!`;
  } else {
    result.textContent = `Your submission "${input.value}", is NOT a palindrome!`;
  }

  event.preventDefault();
}

const form = document.getElementById("form");
const input = document.getElementById("palindrome-input");
const result = document.getElementById("result");
form.addEventListener("submit", logSubmit);
