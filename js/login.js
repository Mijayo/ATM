// alert("diego");

class LogIn {

    constructor(usuario, email) {
        this.usuario = usuario;
        this.email = email;
    }

    guardarLogIn(user, mail) {
        let objLocalStorage = {
            key: user,
            email: mail
        };
        // alert(objLocalStorage.email + objLocalStorage.key);
    }

    verificarLogin() {
        let array;
        let ux = document.getElementById("ux").value;
        let email = document.getElementById("email").value;
        let cadena = `${ux}  ${email}`;

        if (ux !== null || email !== null) {
            // alert("hola2");
            this.guardarLogIn(ux, email);

        } else {

        }
        return cadena;
    }
}

const obj = new LogIn();
console.log(obj.verificarLogin());
// console.log(email);