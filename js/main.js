


// class personaje{

//     constructor(nombre, poder){
//         this.nombre = nombre;
//         this.poder = poder;
//     }

//     saludar(){
//         console.log(`Hola, me llamo ${this.nombre} y soy un guerrero`);
//     }
// }

// class guerrero extends personaje{

// }

// class mago extends personaje{

// }

// const personaje1 = new personaje('guerrero', 100);

// console.log(`Hola, me llamo ${this.nombre}`);





//EJERCICIO DE CUENTA BANCARIA 
class cuentaBancaria {
    constructor(nombreTitular, saldoInicial) {
        this.nombreTitular = nombreTitular;
        this.saldo = saldoInicial;
    }

    depositarMonto(monto) {
        this.saldo += monto;
        console.log(`Se ha depositado un monto de ${monto} a la cuenta de ${this.nombreTitular}. Saldo actual de: ${this.saldo}`);

    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Se ha retirado un monto de ${monto} a la cuenta de ${this.nombreTitular}. Saldo actual de: ${this.saldo}`);
        } else {
            console.error(`Saldo insuficiente, no se puede retirar el monto de ${monto}`)
        }
    }
}

const cuenta1 = new cuentaBancaria('Juan', 1000);
cuenta1.depositarMonto(1000);
cuenta1.retirar(500);


const cuenta2 = new cuentaBancaria('Pedro', 2000);

cuenta2.depositarMonto(5000);
cuenta2.retirar(1000);

// 1. Abstracción:

// La clase CuentaBancaria abstrae las características esenciales de una cuenta bancaria, 
// ocultando los detalles de implementación interna.
// Los usuarios interactúan con la cuenta a través de sus métodos públicos(depositar, retirar), 
// sin necesidad de conocer cómo se gestiona el saldo internamente.

// 2. Encapsulamiento:

// Las propiedades(nombreTitular, saldo) y los métodos(depositar, retirar) están encapsulados dentro de la clase CuentaBancaria.
// Solo se pueden acceder a ellos desde otros métodos de la misma clase, protegiendo los datos internos de modificaciones no deseadas desde el exterior.
