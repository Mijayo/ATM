// alert("diego");

class LogIn {

    constructor(usuario, email) {
        this.usuario = usuario;
        this.email = email;
    }

    guardarLogIn() {
        let cont = 0;
        let ux = document.getElementById("ux").value;
        let email = document.getElementById("email").value;

        let objLocalStorage = {
            id: cont++,
            key: `${ux}`,
            email: `${email}`
        };
        
        if (ux === null || email === null) {
            // Aqui obligamos a guardar
            this.guardarLogIn(objLocalStorage);

        } else {
            this.guardarLogIn(objLocalStorage);
        }

        // Definimos la variable del array para almacenar el objeto itemObject
        var arrayLocal;

        if (localStorage.getItem('nuevoUsuario') === null) {
            // Defino el array
            arrayLocal = [];
        } else {
            arrayLocal = JSON.parse(localStorage.getItem('nuevoUsuario'));
        }

        // 
        arrayLocal.push(obj);

        // Meterlo en localStorage
        localStorage.setItem('nuevoUsuario', JSON.stringify(arrayLocal));
        // alert(obj);
    }

    verificarLogin() {


        // return cadena;
    }
}

const obj = new LogIn();
console.log(obj.verificarLogin());
// console.log(email);