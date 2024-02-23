

const buttonRegister = document.querySelector("#button-register");


function guardarUsuario (){
    const usuario = {
       nombre:  document.querySelector("#name-complete"),
       email: document.querySelector("#email"),
       usuario: document.querySelector("#use-name")
    }

    localStorage.setItem("datos-usuario", usuario.value);

    let local = localStorage.getItem("datos-usuario");
    console.log(local);
}

buttonRegister.addEventListener("click", guardarUsuario);