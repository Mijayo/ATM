// localStorage.clear();

// Quitamos todos los parametros de la URL
window.history.pushState("object or string", "Title", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);

////////////////////////////////////////
$(document).ready(function() {
    $("#registrarse2").click(function() {
        // Libreria notify.js
        $.notify("Usuario registrado con exito", {
            className: 'success',
            position: 'bottom right',
            autoHideDelay: 4500
        });
    });
});
/////////////////////////////////////

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
    let str = usuario.usuario;
    let toUpp = str.toUpperCase();
    return `${usuario.dni}&${usuario.password}#${toUpp}@${usuario.saldo}`;
}

// CONVIERTO EL LOCAL A STRING
function convLocal(email) {
    let convert, value;

    value = localStorage.getItem(email);
    convert = value.toString();

    return String(convert);
}

// REGISTRAMOS USUARIO
function registrarUsuario() {

    // Valores de los campos de texto
    let ux = document.getElementById("ux").value;
    let dni = document.getElementById("dni").value;
    let saldo = document.getElementById("saldo").value;
    let pwd = document.getElementById("pwd").value;

    if (ux == "" && dni == "" && saldo == "" && pwd == "") {
        alert('los campos no pueden estar vacios');
    } else {
        // Creamos el obj de la clase USUARIO
        const user = new Usuario(ux, dni, saldo, pwd);

        // Enviamos los parametros a la clase USUARIO
        user.guardarLogIn(ux, dni, saldo, pwd);
    }

    // Vaciamos los campos de texto
    document.getElementById("ux").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("saldo").value = "";
    document.getElementById("pwd").value = "";

}


// LOGEAMOS AL USUARIO
function logearUsuario() {

    // Valores de los campos de texto
    let logMail = document.getElementById("logEmail").value;
    let logPSW = document.getElementById("logPWD").value;

    if (logMail == "" && logPSW == "") {
        alert('los campos no pueden estar vacios');
    } else {
        const uX = new Usuario(logMail, logPSW);
        uX.verificarLogIn(logMail, logPSW);
    }

    // Vaciar los campos
    document.getElementById("logEmail").value = " ";
    document.getElementById("logPWD").value = " ";
}

/////////////// CLASE USUARIO ////////////////////////
class Usuario {

    constructor(usuario, dni, saldo, pwd) {
        this.usuario = usuario;
        this.dni = dni;
        this.saldo = saldo;
        this.pwd = pwd;
    }

    // METODO PARA GUARDAR EL USUARIO
    guardarLogIn(u, e, s, p) {

        // Creamos el OBJ para guardarlo en el localStorage
        let objLocalStorage = {
            usuario: u,
            dni: e,
            saldo: s,
            password: p
        };

        let z = conversor(objLocalStorage);
        let zDNI = z.substring(0, 9);

        if (localStorage.getItem(objLocalStorage.dni) === null) {
            localStorage.setItem(objLocalStorage.dni, conversor(objLocalStorage));
        } else if (zDNI === objLocalStorage.dni) {
            alert("No se puede registrar mas usuarios con un mismo DNI")
        } else {
            localStorage.setItem(objLocalStorage.dni, conversor(objLocalStorage));
        }

        // bienvenida(objLocalStorage);

    }

    // METODO PARA VERIFICAR EL LOGIN
    verificarLogIn(ema, pwd) {

        let p = convLocal(ema);
        let subEmail = p.substring(0, 9);
        let subPasw = p.substring(10, 14);
        let subNombre = p.substring(15, 20);
        let subSaldo = p.substring(21, 25);

        if ((ema == subEmail) && (pwd == subPasw)) {
            // alert("Entro");
            bienvenida(subEmail, subPasw, subNombre, subSaldo);
            location.href = location.origin + "/index.html";
        } else if ((ema != subEmail) || (pwd != subPasw)) {
            alert("error");
        }
    }
}

function bienvenida(e, p, n, s) {
    const local = new Datos(e, p, n, s);
    local.llamadaDatos(e, p, n, s);
}


//// CLASE DATOS extends USUARIO /////
class Datos extends Usuario {

    constructor(usuario, dni, saldo, pwd) {
        super(usuario, dni, saldo, pwd);
    }

    llamadaDatos(u, d, s, p) {
        document.getElementById().innerHTML = ``;
    }

}