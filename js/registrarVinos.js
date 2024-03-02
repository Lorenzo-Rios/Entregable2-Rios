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
    localStorage.setItem('Productos Comprados', JSON.stringify(vinos));
    console.log(vinos);
}


function agregarAlArray (event){
    let button = event.target;
    let item = button.parentElement;
    let nombre = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-item')[0].src;
        
    const NuevoVino = {
        nombreVino: nombre,
        precioVino: precio,
        imagenVino: imagenSrc
    }
        
    vinos.push((NuevoVino));
}


