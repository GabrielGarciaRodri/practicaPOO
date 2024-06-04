
import { Criatura } from "./criatura"; 

const criatura1 = new Criatura("Guerrero", 100, 120, 20);
const criatura2 = new Criatura("Mago", 80, 100, 30);

criatura1.atacar(criatura2); // Guerrero ataca a Mago y le quita 20 de vida
criatura2.recibirDaño(15); // Mago queda con 65 de vida
criatura2.mostrarEstado(); // Mago: Vida: 65/100, Ataque: 
