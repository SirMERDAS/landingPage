function checkEmail()
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let input = document.getElementById("emailInput");
    let errorText = document.getElementById("error");
  if (input.value.match(validRegex)) {
    alert("OK!");
    input.focus();
    errorText.innerText = "";
    return true;

  } else {

    errorText.innerText = "Invalid email Address";

    input.focus();

    return false;

  }
}
