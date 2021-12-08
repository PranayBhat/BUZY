function addUser() {
  username = document.getElementById("user_name").value;
  localStorage.setItem("username", username);

  Phonenumber = document.getElementById("Phonenumber").value;
  localStorage.setItem("phone number", Phonenumber);

  Email = document.getElementById("Email").value;
  localStorage.setItem("Email", Email);
  window.location = "img.html";
}
var parentcloth="";
function details() {
  window.location = "Account.html";
  parentcloth=document.getElementById("this.id").src;}
function send() {
  username = document.getElementById("user_name").value;
  localStorage.setItem("username", username);
  Address = document.getElementById("Address").value;
  localStorage.setItem("Address", Address);
  diverlingday = document.getElementById("diverlingday").value;
  localStorage.setItem("diverling day", diverlingday);
  var synth = window.speechSynthesis;
  if (username == null || Address == null || diverlingday == null) {
    speak_data = " please fill details";
  } else {
    speak_data = "seller had got your details please see the desing";
  }

  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  window.location="INdex.html";
  image="<img id='display'src='"+ parentcloth + "'>";}