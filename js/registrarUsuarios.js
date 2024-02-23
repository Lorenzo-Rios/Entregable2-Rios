const nombre = document.querySelector("#name-complete");
const email = document.querySelector("#email")
const pass1 = document.querySelector("#pass-one");
const pass2 = document.querySelector("#pass-two");
const buttonRegister = document.querySelector("#button-register");


function guardarUsuario (){
    if (pass1.value == pass2.value){
        localStorage.setItem("name-user", nombre.value);
        localStorage.setItem("email-user", email.value);
        localStorage.setItem("pass-user", pass1.value);
    }else{
        alert('La contraseña debe coincidir!')
    }
}

buttonRegister.addEventListener("click", guardarUsuario);

console.log(JSON.stringify(localStorage.getItem("name-user")));