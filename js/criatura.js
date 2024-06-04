export class Criatura{
    
    constructor(nombre, vida, vidaMaxima, ataque){
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.ataque = ataque;
    }

    atacar(enemigo){
        if(this.vida > 0) {
            enemigo.recibirDaño(this.ataque);
            console.log(`${this.nombre} ataca a ${enemigo.nombre} y le quita ${this.ataque} de vida`);
        } else{
            console.log(`${this.nombre} esta debilitado y ya no puede atacar`);
        }
    }

    recibirDaño(daño){
        this.vida -= daño;
        if(this.vida <= 0){
            this.vida = 0;
            console.log(`${this.nombre} ha muerto`);
        } else{
            console.log(`${this.nombre} queda con ${this.vida} de vida`);
        }
    }

    mostrarEstado(){
        console.log(`${this.nombre}: Vida: ${this.vida}/${this.vidaMaxima}, Ataque: ${this.ataque}`);
    }
    
}

