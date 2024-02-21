document.querySelector('#button-register').addEventListener('click', saveUser);

function saveUser (){
    const sUser = document.querySelector('#user-tag').value,
          sEmail = document.querySelector('#correo-usuario').value;
    
    addUser(sUser, sEmail);
    
}