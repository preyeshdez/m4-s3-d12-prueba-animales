import Animal from "./Animal.js";

export default class Serpiente extends Animal{
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido)
    }

    Sisear(){
        let reproductor = document.getElementById("player");
        reproductor.src = `./assets/sounds/${this._sonido}`;
        reproductor.play();
    }

}