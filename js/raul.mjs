class Datos  {
    constructor(usuario, dni, saldo, pwd) {
        this.usuario = usuario;
        this.dni = dni;
        this.saldo = saldo;
        this.pwd = pwd;
    }
}

import { hello } from '/Alumno/Documents/testLogIn'; // or './module'
let val = hello();  // val is "Hello";
alert(val);