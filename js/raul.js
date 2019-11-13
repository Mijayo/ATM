class Datos  {
    constructor(usuario, dni, saldo, pwd) {
        this.usuario = usuario;
        this.dni = dni;
        this.saldo = saldo;
        this.pwd = pwd;
    }
}

import { perico } from '/testLogIn.js'; // or './module'
let val = perico();  // val is "Hello";