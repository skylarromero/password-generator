// Assignment code here
var passwordCriteria = function(alPha) {}
  var alphaPrompt = window.prompt ("Would you like UpperCase, LowerCase, or Both? Enter 'UPPER', 'LOWER', or 'BOTH'");
  console.log(alphaPrompt);
  if (alphaPrompt === "upper" || alphaPrompt === "UPPER")
  if (alphaPrompt === "lower" || alphaPrompt === "LOWER")
  if (alphaPrompt === "both"  || alphaPrompt === "BOTH")
 
  
  var numPrompt = window.prompt ("Would you like Numbers, Symbles, or Both? Enter 'NUMBER', 'SYMBOL', or 'BOTH'");
  console.log(numPrompt);
  if (numPrompt === "nunber" || numPrompt === "NUMBER")
  if (numPrompt === "symbol" || numPrompt === "SYMBOL")
  if (numPrompt === "both" || numPrompt === "BOTH")
 
  
  var passLength = window.prompt ("How long does your password need to be? Choose between '8 and 132' characters");

  console.log(passLength);
  

  
  
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(Math.floor(Math.random()*1^132).toString(36));
  console.log(generatePassword)
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
