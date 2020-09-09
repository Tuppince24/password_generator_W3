// Assignment Code
var generateBtn = document.querySelector("#generate");
// password options
var number ="1234567890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var SPcharacter = "!@#$%^&*_-~";






function generatePassword(){
 var passwordOpt = "";
  length = prompt("Please chose a password lenght between 8-20")
  if(isNaN(length) || length < 8 || length > 20) {
    alert("The value you have chosen  1. Not a number 2. Number don't meet requirements")
    return;
  }
  console.log("user pick " + length)


  var numberBool = confirm("would you like use numbers?")
  var upperCaseBool = confirm("would you like use uppercase letters?")
  var lowerCaseBool = confirm("would you like use lowercase letters")
  var SPcharacterBool = confirm("would you like use special characters? ex:..'#,$,!'")

  if(numberBool == false &&
    upperCaseBool == false &&
    lowerCaseBool == false &&
    SPcharacterBool == false
    ){
      alert('At lest pick one :P')
      return;
    }
    if(numberBool){
      passwordOpt += number;
    }
    if(upperCaseBool){
      passwordOpt += upperCase;
    }
    if(lowerCaseBool){
      passwordOpt += lowerCase;
    }
    if(SPcharacterBool){
      passwordOpt += SPcharacter;
    }

console.log(passwordOpt)
  
// making random number outcome
    var outcome = "";
    for(var i = 0; i < length; i++){
      
        var rannumber = passwordOpt[Math.floor(Math.random()* passwordOpt.length)];
        outcome = outcome +rannumber;
        console.log(outcome)
      

       
    }
    return outcome;

}
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);