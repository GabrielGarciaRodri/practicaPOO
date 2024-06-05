import { Heroe } from "./Heroe.js";
import { Monstruo } from "./Monstruo.js";
import {Juego} from "./Juego.js";


const heroe = new Heroe("Valiente", 100, 100, 80, 50, "Curacion");
const monstruo = new Monstruo("Golem", 200, 150, 60, 70, "Tierra");

heroe.atacar(monstruo);
monstruo.rugir();
heroe.usarHabilidadEspecial(monstruo);
monstruo.atacar(heroe);
monstruo.atacar(heroe);
heroe.mostrarEstado();
monstruo.mostrarEstado();

const juego = new Juego();


juego.iniciarJuego();

juego.investigar(); //Crea monstruo random uwu

juego.agregarEventoAlHistorial("El héroe ataca al monstruo.");
juego.agregarEventoAlHistorial("El monstruo ruge y contraataca.");
juego.agregarEventoAlHistorial("El héroe utiliza su habilidad especial.");

juego.setMonstruo(monstruo);
juego.mostrarHistorial();
