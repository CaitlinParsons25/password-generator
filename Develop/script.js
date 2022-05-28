// Assignment Code
var generateBtn = document.querySelector("#generate");

// password component arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(function (x) {return x.toUpperCase(lowerCase)});
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "@", "$", "%", "&", "*", "?", ";", "~", "-", "_"];

// generate password function
var generatePassword = function () {
  // get password length
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must choose a length between 8 and 128 characters");
      return generatePassword();
    } 

    // ask if lowercase characters are desired and add if yes, to compiled password
    var confirmLowerCase = confirm("Would you like your password to include lowercase letters? If yes, click 'OK.' If no, click 'Cancel.'");

    //ask if uppercase characters are desired and if yes, add to compiled password
    var confirmUpperCase = confirm("Would you like your password to include uppercase letters? If yes, click 'OK.' If no, click 'Cancel.'");  
    
    // ask if numbers are desired and if yes, add to compiled password
    var confirmNumericCharacters = confirm("Would you like your password to include numbers? If yes, click 'OK.' If no, click 'Cancel.'");

    // ask if special characters are desired and if yes, add to compiled password
    var confirmSpecialCharacters = confirm("Would you like your password to include special characters? If yes, click 'OK.' If no, click 'Cancel.'");
    
    // concatentate password
    var passwordCharacters = [];
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase);
    }
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase);
    }
    if (confirmNumericCharacters) {
      passwordCharacters = passwordCharacters.concat(numericCharacters);
    }
    if (confirmSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    
    // compile password    
    var compiledPassword = [];
    for(var i = 0; i < passwordLength; i++) {
      compiledPassword.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
    }
    return compiledPassword.join("");
  };

// Write password to the #password input
writePassword = function() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
