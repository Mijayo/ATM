// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let cont = 0;

function registrarUsuario() {

    // Creamos el obj de la clase
    const user = new Usuario();

    // Valores de los campos de texto
    let ux = document.getElementById("ux").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;

    /*alert(ux);
    alert(email);
    alert(pwd);*/

    // Creamos el OBJ para guardarlo en el localStorage
    let objLocalStorage = {
        id: cont++,
        usuario: ux,
        email: email,
        password: pwd
    };

    user.guardarLogIn(objLocalStorage);
}

class Usuario {

    constructor(usuario, email, pwd) {
        this.usuario = usuario;
        this.email = email;
        this.pwd = pwd;
    }

    guardarLogIn(obj) {
        alert(obj);
    }

}
























/*class LogIn {


    guardarLogIn() {
        // alert("hola");
        let arrayLocal;

        let cont = 0;

        // Valores de los campos de texto
        let ux = document.getElementById("ux").value;
        let email = document.getElementById("email").value;
        let pwd = document.getElementById("pwd").value;

        console.log(ux);
        console.log(email);
        console.log(pwd);
        // Creamos el OBJ para guardarlo en el localStorage
        // let objLocalStorage = {
        //     id: cont++,
        //     usuario: `${ux}`,
        //     email: `${email}`,
        //     password: `${pwd}`
        // };

        // console.log(JSON.stringify(objLocalStorage));

        /*if (ux === null || email === null) {
            // Aqui obligamos a guardar
            this.guardarLogIn(objLocalStorage);

        } else {
            this.guardarLogIn(objLocalStorage);
        }

        // Definimos la variable del array para almacenar el objeto itemObject
        //var arrayLocal;

        // if (localStorage.getItem('nuevoUsuario') === null) {
        //     // Defino el array
        //     arrayLocal = [];
        // } else {
        //     arrayLocal = JSON.parse(localStorage.getItem('nuevoUsuario'));
        // }


        // arrayLocal.push(objLocalStorage);

        // // Meterlo en localStorage
        // localStorage.setItem('nuevoUsuario', JSON.stringify(arrayLocal));

        // // alert(obj);
    }

    verificarLogin() {


        // return cadena;
    }
}*/

// document.getElementById("boton").addEventListener("click", LogIn.guardarLogIn());
// const obj = new LogIn();
// console.log(obj.guardarLogIn());
// console.log(email);