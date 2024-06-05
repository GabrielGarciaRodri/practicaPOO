
export class Criatura{
    
    constructor(nombre, vida, vidaMaxima, ataque, defensa){
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.ataque = ataque;
        this.defensa = defensa;
    }

    atacar(enemigo){
        const daño = this.ataque - enemigo.defensa;
        if(daño > 0) {
            enemigo.vida = daño;
            console.log(`${this.nombre} ataca a ${enemigo.nombre} y le causa ${daño} de daño`);
        } else {
            console.log(`${this.nombre} ataca a ${enemigo.nombre} pero no le causa daño`);
        }
    }

    recibirDaño(daño){
        this.vida -= daño;
        if(this.vida <= 0){
            this.vida = 0;
            console.log(`${this.nombre} ha muerto`);
        } else{
            console.log(`${this.nombre} recibe ${daño} de daño`);
        }
    }

    mostrarEstado(){
        console.log(`**Estado de ${this.nombre}: **`);
        console.log(`- Vida: ${this.vida} / ${this.vidaMaxima}`);
        console.log(`- Ataque: ${this.ataque}`);
        console.log(`- Defensa: ${this.defensa}`);
    }
    
}

function atacar(heroe, enemigo) {
    const daño = heroe.ataque - enemigo.defensa;
    if (daño > 0) {
      enemigo.recibirDaño(daño);
      juego.loguear(`${heroe.nombre} ataca a ${enemigo.nombre} y le causa ${daño} de daño.`, "info"); 
    } else {
      juego.loguear(`${heroe.nombre} ataca a ${enemigo.nombre} pero no causa daño.`, "info");
    }
}

function recibirDaño(criatura, daño) {
    criatura.vida -= daño;
    if (criatura.vida <= 0) {
      criatura.vida = 0;
      juego.loguear(`${criatura.nombre} ha sido derrotado!`, "warning"); 
    } else {
      juego.loguear(`${criatura.nombre} recibe ${daño} de daño.`, "info"); 
    }
}

