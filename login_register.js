let Switches = document.getElementsByClassName("switch");
let loginContainer = document.getElementById("login");
let registerContainer = document.getElementById("registration");
Switches[0].addEventListener("click",SwitchButton);
Switches[1].addEventListener("click",SwitchButton);
function SwitchButton(){
    loginContainer.classList.toggle("hidden");
    registerContainer.classList.toggle("hidden");
}
