import Animal from "./Animal.js";

export default class Aguila extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }

    Chillar(){
        let reproductor = document.getElementById("player");
        reproductor.src = `./assets/sounds/${this._sonido}`;
        reproductor.play();
    }

}