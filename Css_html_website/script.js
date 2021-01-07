function validation (){
  var valid = true;
  var formlabels = document.getElementByTagName("label");

  var firstname = document.regform.firstname.value;
  if (firstname == ""){
    formlabels[0].innerHTML ="First Name: [required]";
    formlabels[0].style.Color = "red";
    valid = false;
  }
  else if (!isNaN(firstname)){
    formlabels[0].innerHTML ="First Name: [Text only]";
    formlabels[0].style.Color = "red";
    valid = false;
  }
  else {
    formlabels[0].innerHTML ="First Name:";
    formlabels[0].style.Color = "black";
    valid = (valid) ? true : false ;
  }

  var lastname = document.regform.lastname.value;
  if (lastname == ""){
    formlabels[1].innerHTML ="Last Name: [required]";
    formlabels[1].style.Color = "red";
    valid = false;
  }
  else if (!isNaN(lastname)){
    formlabels[1].innerHTML ="Last Name: [Text only]";
    formlabels[1].style.Color = "red";
    valid = false;
  }
  else {
    formlabels[1].innerHTML ="Last Name:";
    formlabels[1].style.Color = "black";
    valid = (valid) ? true : false ;
  }

  var email = document.regform.userEmail.value;
  var at = email.indexOf("@");
  var dot = email.indexOf(".");
  if (email == ""){
    formlabels[2].innerHTML ="Email address: [required]";
    formlabels[2].style.Color = "red";
    valid = false;
  }
  else if (at == -1 || dot == -1 || dot < at){
    formlabels[2].innerHTML ="Email address: [incorrect Email]";
    formlabels[2].style.Color = "red";
    valid = false;
  }
  else {
    formlabels[2].innerHTML ="Email address:";
    formlabels[2].style.Color = "black";
    valid = (valid) ? true : false ;
  }

  var password = document.regform.userPassword.value;
  if (password == ""){
    formlabels[3].innerHTML ="password: [required]";
    formlabels[3].style.Color = "red";
    valid = false;
  }
  else if (password.lenth < 8)){
    formlabels[3].innerHTML ="password: [must be > 8 lenth]";
    formlabels[3].style.Color = "red";
    valid = false;
  }
  else {
    formlabels[3].innerHTML ="password:";
    formlabels[3].style.Color = "black";
    valid = (valid) ? true : false ;
  }

  var age = document.regform.userAge.value;
  if (age == ""){
    formlabels[4].innerHTML ="age: [required]";
    formlabels[4].style.Color = "red";
    valid = false;
  }
  else if (age < 0 || age > 100 )){
    formlabels[4].innerHTML ="age: [must be between 0 and 100]";
    formlabels[4].style.Color = "red";
    valid = false;
  }
  else {
    formlabels[4].innerHTML ="age:";
    formlabels[4].style.Color = "black";
    valid = (valid) ? true : false ;
  }

  var mobile = document.regform.userMobile.value;
  if (isNan(mobile)){
    formlabels[5].innerHTML ="mobile: [numbers only]";
    formlabels[5].style.Color = "red";
    valid = false;
  }
  else {
    formlabels[5].innerHTML ="mobile:";
    formlabels[5].style.Color = "black";
    valid = (valid) ? true : false ;
  }

  return valid;
}
