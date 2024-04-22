import Animal from "./Animal.js";

export default class Oso extends Animal{
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido)
    }

    Grunir(){
        let reproductor = document.getElementById("player");
        reproductor.src = `./assets/sounds/${this._sonido}`;
        reproductor.play();
    }

}