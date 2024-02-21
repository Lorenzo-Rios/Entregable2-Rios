const userList = [];

function addUser(pusername, pemail){
    let newUser = {
        usuario: pusername,
        email: pemail
    };
    
    console.log(newUser);
    userList.push(newUser);
}
