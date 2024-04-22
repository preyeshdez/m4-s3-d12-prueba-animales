import Animal from "./Animal.js";

export default class Leon extends Animal{
    constructor(nombre, edad, comentario, img, sonido){
        super(nombre, edad, comentario, img, sonido)
    }

    Rugir(){
        let reproductor = document.getElementById("player");
        reproductor.src = `./assets/sounds/${this._sonido}`;
        reproductor.play();
    }

}