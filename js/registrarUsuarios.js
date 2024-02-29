class usuario {
    constructor(nombreUsuario, emailUsuario, passwordUsuario){
        this.nombreUsuario = nombreUsuario,
        this.emailUsuario = emailUsuario,
        this.passwordUsuario = passwordUsuario
    }
}

const usuarios = [];

if (localStorage.getItem('usuarios')){
    let user = JSON.parse(localStorage.getItem('usuarios'));

    for (let i = 0; i<usuarios.length; i++){
        usuarios.push(user[i]);
    }
}

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/,  
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const buttonRegister = document.getElementById('button-register');

buttonRegister.addEventListener('click', controlarPassword);

function controlarPassword () {
    const pass1 = document.getElementById('pass-one').value;
    const pass2 = document.getElementById('pass-two').value;
    if (pass1 == pass2 ||  pass1.){
        
        const formulario = document.getElementById('formulario');
        
        formulario.addEventListener('submit', (e)=>{
          e.preventDefault;
          agregarUsuario();
        })
        
        function agregarUsuario () {
            const nombre = document.getElementById('name-complete').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('pass-one').value;
        
            const NuevoUsuario = new usuario (nombre, email, password);
        
            usuarios.push(NuevoUsuario);
            console.log(usuarios);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            formulario.reset();
        }
    }else{
        alert('La contraseña debe coincidir!')
    }
}


