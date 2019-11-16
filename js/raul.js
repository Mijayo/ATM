// alert("HOLA DIEGOOOOO");
/*$(document).ready(function() {
    $.getScript("testLogIn.js", function() {

    });

    // alert("Hola RAUL");
});

function bienvenida() {
    // alert("HOLA DIEGOOOOO");

    let local = JSON.parse(localStorage.getItem("nuevoUsuario"));

    local.forEach(usuarioRegistrado => {

        let usuario = usuarioRegistrado.usuario;
        let email = usuarioRegistrado.email;
        let saldo = usuarioRegistrado.saldo;
        let password = usuarioRegistrado.password;

        let newObj = {
            usus: `${usuario}`,
            mail: `${email}`,
            monto: `${saldo}`,
            pwd: `${password}`
        };

        let obj = new Datos(usuario, email, saldo, password);
        obj.llamadaDatos(usuario, email, saldo, password);

        /*Array.from(newObj);
        alert(Array);*/

/*let array = [`${usuario}`, `${email}`, `${saldo}`, `${password}`];
alert(array);*/

/*for (i = 0; i < array.length; i++) {
            if (usus == array[i].usus && pwd == array[i].pwd) {
            }
        }
        //return (String `${usuarioRegistrado.usuario}`);
    });
}

class Datos {

    constructor(usuario, email, saldo, pass) {
        this.usuario = usuario;
        this.email = email;
        this.saldo = saldo;
        this.password = pass;
    }

    llamadaDatos(usu, ma, sal, p) {
        alert(usu);
        alert(ma);
        alert(sal);
        alert(p);
    }


}*/