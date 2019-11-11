// alert("diego");

class LogIn {

    constructor(usuario, email) {
        this.usuario = usuario;
        this.email = email;
    }

    guardarLogIn() {

    }

    verificarLogin() {
        let array;
        let ux = document.getElementById("ux").value;
        let email = document.getElementById("email").value;
        let cadena = `${ux}  ${email}`;
        let objLocalStorage = {
            key: `${ux}`,
            email: `${email}`
        };

        if (array == null) {

            this.guardarLogIn();

        } else {

        }


        return cadena;
    }
}

const obj = new LogIn();
console.log(obj.verificarLogin());
// console.log(email);