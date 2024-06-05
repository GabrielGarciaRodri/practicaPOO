
import { Monstruo } from "./Monstruo.js ";

export class Juego {
    constructor(){
        this.historial = [];
        this.logLevel = "info"; //Login principal pero no se para que por ahora (no olvidar) xd
        this.monstruo = null;
    }

    iniciarJuego(){
        console.log("Iniciando el juego");
    }

    agregarEventoAlHistorial(evento){
        this.historial.push(evento);
        console.log(evento);
    }

    mostrarHistorial(){
        console.log("**HISTORIAL**")
        if(this.historial.length === 0 ){
            console.log("El historial está vacío");
        } else {
            for(const evento of this.historial){
                console.log(evento);
            }
        }
    }

    loguear(mensaje){
        if(nivel <= this.logLevel){
            this.agregarEventoAlHistorial(mensaje); 
            console.log(mensaje);
        }
    }

    //Mostrar monstuo
    
    setMonstruo(){
        this.monstruo = monstruo;
        console.log(`El monstruo es ${this.monstruo.nombre}`);
    }

    investigar(){
        const monstruos = [
            function crearGoblin(){
                return new Monstruo("Goblin", 50, 75, 15, 8);
            },
            
            function crearOrco(){
                return new Monstruo("Orco", 100, 100, 20, 10);
            },

            function crearTroll(){
                return new Monstruo("Troll", 150, 150, 25, 15);
            },

            function crearDragon(){
                return new Monstruo("Dragon", 200, 200, 30, 20);
            },

            function crearOgro(){
                return new Monstruo("Ogro", 150, 150, 25, 15);
            },

            function crearGigante(){
                return new Monstruo("Gigante", 200, 200, 30, 20);
            },

            function crearMago(){
                return new Monstruo("Mago", 150, 150, 25, 15);
            },
        ];

        const randomIndex = Math.floor(Math.random() * monstruos.length);
        const nuevoMonstruo = new monstruos[randomIndex]();
        this.setMonstruo(nuevoMonstruo);
        Juego.logear(`Un nuevo monstruo a aparecido!!! Es un: ${nuevoMonstruo.nombre}`, "info");

    }
}