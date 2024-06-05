export class Juego {
    constructor(){
        this.historial = [];
        this.logLevel = "info"; //Login principal pero no se para que por ahora (no olvidar) xd
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
}