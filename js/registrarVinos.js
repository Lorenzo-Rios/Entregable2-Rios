class vino{
    contructor(nombreVino, precioVino, imagenVino){
        this.nombreVino = nombreVino,
        this.precioVino = precioVino,
        this.imagenVino = imagenVino
    }
}

const vinos = [];

listo();

document.getElementsByClassName('btn-pagar')[0].addEventListener('click', guardarVinos);

function listo (){
    const botoncarrito = document.getElementsByClassName('boton-item');
    for(let i=0; i<botoncarrito.length;i++){
    let button = botoncarrito[i];
    button.addEventListener('click', agregarAlArray);
}
}

function guardarVinos (){
    localStorage.setItem('vinos', JSON.stringify(vinos));
    console.log(vinos);
}


function agregarAlArray (event){
    let button = event.target;
    let item = button.parentElement;
    let nombre = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-item')[0].src;
        
    const NuevoVino = new vino (nombre, precio, imagenSrc);
        
    vinos.push((NuevoVino));
}


