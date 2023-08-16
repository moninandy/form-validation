const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword");

form.addEventListener('submit',e=>{

    e.preventDefault();
    checkInput();
});

function checkInput(){

    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();

    if(usernameValue === ''){
     setError(username, 'username cannot be blank');

         }    
          else{
    setSuccess(username);
}
if(emailValue === ''){
    setError( email, 'Email cannot be blank');

        }    
         else if(!isEmail(email)){
   setError(email,'Not a valid');
         }
         else{
            setSuccess(email);
         }

         function isEmail(email){
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


         }
function setError(input, message){
    const formcontrol=input.parentElement;
    const small= formcontrol.querySelector('small');
    formcontrol.className='form-control error';
    small.innerText=message;
}
function setSuccess(input){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success';

}


   if(passwordValue === ''){
    setError(password,"password cannot be blank");

        }    
         else{
   setSuccess(password);
}
if(confirmpasswordValue === ''){
    setError( confirmpassword, 'password cannot be blank');

        }    
         else if(passwordValue !== confirmpasswordValue)
         {

   setError( confirmpassword ,'password does not match');
}
      else{
    setSuccess(confirmpassword);
}
}


