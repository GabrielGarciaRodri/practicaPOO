import { Criatura } from "./criatura.js";

export class Heroe extends Criatura {
    constructor(nombre, vida, vidaMaxima, ataque, defensa, habilidadEspecial){
        super(nombre, vida, vidaMaxima, ataque, defensa);
        this.habilidadEspecial = habilidadEspecial;
    }

    usarHabilidadEspecial(enemigo){
        console.log(`${this.nombre} utiliza su ataque especial contra ${enemigo.nombre}`);
    } 
}

