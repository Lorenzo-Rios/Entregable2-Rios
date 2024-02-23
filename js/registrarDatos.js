const nombre = document.querySelector("#name-complete");
const email = document.querySelector("#email")
const user = document.querySelector("#use-name");
const pass1 = document.querySelector("#pass-one");
const pass2 = document.querySelector("#pass-two");
const buttonRegister = document.querySelector("#button-register");


function guardarUsuario (){
    if (pass1.value == pass2.value){
        const usuario = {
            nombreCompleto : nombre.value,
            email: email.value,
            nombreUsuario : user.value,
            pass : pass1.value
        }

        const usuarioEnJson = JSON.stringify(usuario);
        localStorage.setItem("user", usuarioEnJson);
        console.log(usuarioEnJson);
    }else{
        alert('La contraseña debe coincidir!')
    }
}

buttonRegister.addEventListener("click", guardarUsuario);