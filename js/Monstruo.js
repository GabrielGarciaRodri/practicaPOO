import { Criatura } from "./Criatura.js";

export class Monstruo extends Criatura {
    constructor(nombre, vida, vidaMaxima, ataque, defensa, tipo){
        super(nombre, vida, vidaMaxima, ataque, defensa)
        this.tipo = tipo;
    }

    rugir(){
        console.log(`${this.nombre} ruge amenazante!!!`);
    }
}

export class Orco extends Monstruo {
    constructor(nombre){
        super(nombre, 120, 150, 70, 80, "Tierra");
    }
}

export class Goblin extends Monstruo {
    constructor(nombre){
        super(nombre, 80, 60, 90, 50, "Tierra");
    }
    lanzarDaga(enemigo) {
        const daño = this.ataque * 0.7; // Daño reducido por la daga
        enemigo.recibirDaño(daño);
        console.log(`${this.nombre} lanza una daga a ${enemigo.nombre} y le causa ${daño} de daño.`);
      }
}

export class Kobold extends Monstruo {
    constructor(nombre){
        super(nombre, 60, 40, 60, 70, "Fuego");
    }

    escupirFuego(enemigo){
        const daño = this.ataque * 1.2; // Daño reducido por la daga
        enemigo.recibirDaño(daño);
        console.log(`${this.nombre} escupe fuego a ${enemigo.nombre} y le causa ${daño} de daño.`);
  
    }
}