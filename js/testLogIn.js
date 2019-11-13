// localStorage.clear();

// Quitamos todos los parametros de la URL
window.history.pushState("object or string", "Title", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// CONVERTIMOS EL OBJ A STRING
function conversor(usuario) {
    return `${usuario.email}&${usuario.pwd}#${usuario.usuario}`;
}


// REGISTRAMOS USUARIO
const click = document.getElementById('registrarse2').addEventListener('click', function registrarUsuario() {
  
    // Valores de los campos de texto
    let ux = document.getElementById("ux").value;
    let email = document.getElementById("email").value;
    let saldo = document.getElementById("saldo").value;
    let pwd = document.getElementById("pwd").value;

    // Creamos el obj de la clase USUARIO
    const user = new Usuario(ux, email, saldo, pwd);
    
    localStorage.setItem(email, conversor(user));

    // Enviamos los parametros a la clase USUARIO
    user.guardarLogIn(cont, ux, email, saldo, pwd);
});


// LOGEAMOS AL USUARIO
function logearUsuario() {

    // Valores de los campos de texto
    let logMail = document.getElementById("logEmail").value;
    let logPSW = document.getElementById("logPWD").value;

    const uX = new Usuario(logMail, logPSW);

    uX.verificarLogIn(logMail, logPSW);
}


// CLASE //
class Usuario {

    constructor(conta, usuario, email, saldo, pwd) {
        this.contador = conta;
        this.usuario = usuario;
        this.email = email;
        this.saldo = saldo;
        this.pwd = pwd;

    }

    // METODO PARA GUARDAR EL USUARIO
    guardarLogIn(c, u, e, s, p) {

        // Creamos el OBJ para guardarlo en el localStorage
        let objLocalStorage = {
            id: c,
            usuario: u,
            email: e,
            saldo: s,
            password: p
        };

        // Definimos la variable del array para almacenar el objeto itemObject
        var arrayLocal;

        if (localStorage.getItem('nuevoUsuario') === null) {
            // Defino el array
            arrayLocal = [];
        } else {
            arrayLocal = JSON.parse(localStorage.getItem('nuevoUsuario'));
        }

        // 
        arrayLocal.push(objLocalStorage);

        // Meterlo en localStorage
        localStorage.setItem('nuevoUsuario', JSON.stringify(arrayLocal));

    }
    
    // METODO PARA VERIFICAR EL LOGIN
    verificarLogIn(ema, psw) {
        /*alert(ema);
        alert(psw);*/

        /*if (ema !== null && psw !== null) {
            window.location.href = "index.html";
        }*/

        window.location.href = "index.html";
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