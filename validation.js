const text=document.querySelector("#name");
let nameerror=document.querySelector(".nameerror");
text.addEventListener('input',function()
{
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2}$');
    if(nameRegex.test(text.value))
    nameerror.textContent="";
    else
    nameerror.textContent="Name is incorrect";
});
const email=document.querySelector("#email");
let emailerror=document.querySelector(".emailerror");
email.addEventListener('input',function()
{
    let emailRegex=RegExp("^[a-z]+(.[a-z])+@[A-Za-z]+.[a-z]{2,3}(.[a-z]{2})?$");
    if(emailRegex.test(email.value))
    emailerror.textContent="";
    else
    emailerror.textContent="Email is incorrect";
});
