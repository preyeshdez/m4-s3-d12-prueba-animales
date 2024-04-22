import Animal from "./Animal.js";

export default class Lobo extends Animal{
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido)
    }

    Aullar(){
        let reproductor = document.getElementById("player");
        reproductor.src = `./assets/sounds/${this._sonido}`;
        reproductor.play();
    }

}