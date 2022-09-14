var password=document.getElementByeId("password"),
    confirm_password=document.getElementByeId("re-type password");
function validatePassword()
{
  if(password.value != confirm_password.value)
  {
    confirm_password.setcustomValidatity("password is not match");
  }
  else
  {
    confirm_password.setcustomValidatity("");
  }
  confirm_password.onchange=validatePassword;
  confirm_password.onkeyup=validatePassword;
}
