// assign variables + event listener to prompt when button is pushed
var generateBtn = document.querySelector("#generate");
var getLength = "";
var useNumChars;
var useSpecialChars;
var useUpperCase;
var useLowerCase;

// arrays for password criteria choices
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// prompt user for password criteria choices
function generatePassword() {
  var pwdLength = (prompt("How many characters (8 to 128) do you want your password to contain?"));
  //check for correct password length
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Password length must be between 8 and 128 characters, try again.");
    var pwdLength = (prompt("How many characters (8 to 128) do you want your password to contain?"));
  }
  alert("Your password will have " + pwdLength + " characters.");

  useNumChars = confirm("Click OK to confirm if you want to use numbers in your password.");
  useSpecialChars = confirm("Click OK to confirm if you want to use special characters in your password.");
  useUpperCase = confirm("Click OK to confirm if you want to use uppercase letters in your password.");
  useLowerCase = confirm("Click OK to confirm if you want to use lowercase letters in your password.");

  while (useNumChars === false && useSpecialChars === false && useUpperCase === false && useLowerCase === false) {
    alert("You must choose at least one password criteria (numbers, special characters, lowercase, or uppercase). Please try again.");
    useNumChars = confirm("Click OK to confirm if you want to use numbers in your password.");
    useSpecialChars = confirm("Click OK to confirm if you want to use special characters in your password.");
    useUpperCase = confirm("Click OK to confirm if you want to use uppercase letters in your password.");
    useLowerCase = confirm("Click OK to confirm if you want to use lowercase letters in your password.");
  }
  // assign random values to password based on criteria chosen
  var pwdChars = []

  if (useNumChars) {
    pwdChars = pwdChars.concat(numChars);
  }

  if (useSpecialChars) {
    pwdChars = pwdChars.concat(specialChars);
  }

  if (useUpperCase) {
    pwdChars = pwdChars.concat(alphaUpperCase);
  }

  if (useLowerCase) {
    pwdChars = pwdChars.concat(alphaLowerCase);
  }
  console.log(pwdChars);

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPwd = "";

  for (var i = 0; i < pwdLength; i++) {
    randomPwd = randomPwd + pwdChars[Math.floor(Math.random() * pwdChars.length)];
    console.log(randomPwd);
  }
  return randomPwd;
}

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = password;
  document.getElementById('password').value = passwordText;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
