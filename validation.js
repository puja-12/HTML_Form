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
