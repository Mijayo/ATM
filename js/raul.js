// alert("HOLA DIEGOOOOO");
$(document).ready(function() {
    $.getScript("testLogIn.js", function() {

    });

    // alert("Hola RAUL");
});

function bienvenida() {
    // alert("HOLA DIEGOOOOO");
    let local = localStorage.getItem('nuevoUsuario');
    alert(local);
}

class Datos {
    constructor() {

    }
}