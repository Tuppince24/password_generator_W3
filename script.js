// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  console.log('hello world')
  let size = Number (
    prompt(
      'pick a paassword lenght between 8-20 characters'
      )
  );

  console.log("user pick x size ", size);

  const Pnumber = [0, 1, 2 , 3,4,5,6,7,8,9];
  const alpha = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");
  const calpAlpha = alpha.toUpperCase;
  const SPcharacters =("!,@, #,$,%,^,&,*,(,),-,_,+,=,")



  if (size < 8 || size > 20){
    alert('This lenght would not work please try again')
    return;
  } else if(size >= 8 || size <=20) {
    (size == Pnumber && size == alpha && size == calpAlpha && size == SPcharacters)
    return;
  }

  const Pnumber = [0, 1, 2 , 3,4,5,6,7,8,9];
  const alpha = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");
  const calpAlpha = alpha.toUpperCase;
  const SPcharacters =("!,@, #,$,%,^,&,*,(,),-,_,+,=,")

}

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

