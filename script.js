// Assignment Code
var generateBtn = document.querySelector("#generate");



// making charactors
var Pnumber = [1,2,3,4,5,6,7,8,9,0].splice;
var lowerCaseL = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].splice;
var UppercaseL = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].splice;
var abc = ("Now you know your abc's");
var SPcharacters =["!","@","#","$","%","^","&","*","(",")","-","_","+","="];




function passwordOP(){

  // pop up un the screen with set values   
  console.log('hello world')
  var size = Number(
    prompt(
      'pick a paassword lenght between 8-20 characters'
      )
  );
  var Pnumber = confirm("would you like to use numeral?");
  var lowerCaseL = confirm("would you like to use Lower case characters?");
  var UppercaseL = confirm("would you like to use Upper case characters?");
  var SPcharacters = confirm("would you like to use symbols characters?");

 if (lowerCaseL == false && 
  Pnumber == false && 
  UppercaseL  == false && 
  lowerCaseL == false &&  SPcharacters == false){
  alert('Must chose at least');
  return
}

  console.log("user pick x size ", size);





  // Defualt 
  if (size < 8 || size > 20){
    alert('This lenght would not work please try again')
    return;
  
  }


  if(Pnumber){
    console.log(pickedCharacters =+ Pnumber);
  }

  if(lowerCaseL){
    console.log(pickedCharacters += lowerCaseL);
  }
  
  if(UppercaseL){
    console.log(pickedCharacters += UppercaseL);
  }

  if(SPcharacters){
    console.log(pickedCharacters += SPcharacters);
  }

  console.log(pickedCharacters);




}

function generatePassword(){
  var userOption = passwordOP()

} 

passwordOP();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// return;