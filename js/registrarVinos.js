const buttonRegisterVino = document.querySelector("#boton-item")

function guardarVino (titulo, precio, imagenSrc){
    const objeto = {
        nombre: titulo,
        precio: precio,
        imagen: imagenSrc
    }

    localStorage.setItem("compra", JSON.stringify(objeto))

}

buttonRegisterVino.addEventListener("click", guardarVino);