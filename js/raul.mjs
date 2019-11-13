alert("Hola RAUL");

class Datos  {
    constructor(usuario, dni, saldo, pwd) {
        this.usuario = usuario;
        this.dni = dni;
        this.saldo = saldo;
        this.pwd = pwd;
    }
}

import { hello } from './testLogIn'; 
let val = hello();  
alert(val);