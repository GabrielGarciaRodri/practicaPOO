import { Criatura } from "./criatura.js";

export class Monstruo extends Criatura {
    constructor(nombre, vida, vidaMaxima, ataque, defensa, tipo){
        super(nombre, vida, vidaMaxima, ataque, defensa)
        this.tipo = tipo;
    }

    rugir(){
        console.log(`${this.nombre} ruge amenazante!!!`);
    }
}