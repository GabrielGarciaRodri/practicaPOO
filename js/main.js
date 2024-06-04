import { Heroe } from "./Heroe.js";
import { Monstruo } from "./Monstruo.js";


const heroe = new Heroe("Valiente", 100, 100, 80, 50, "Curacion");
const monstruo = new Monstruo("Golem", 200, 150, 60, 70, "Tierra");

heroe.atacar(monstruo);
monstruo.rugir();
heroe.usarHabilidadEspecial(monstruo);
monstruo.atacar(heroe);
monstruo.atacar(heroe); // Monstruo defeats the hero
heroe.mostrarEstado();
monstruo.mostrarEstado();
