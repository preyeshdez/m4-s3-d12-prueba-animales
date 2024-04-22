export default class Animal {
    constructor(nombre, edad, comentario, img, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentario = comentario;
        this._sonido = sonido;
    }

    getNombre(){
        return this._nombre;
    }

    getEdad(){
        return this._edad;
    }

    getImg(){
        return this._img;
    }

    getSonido(){
        return this._sonido;
    }

    getComentario(){
        return this._comentario;
    }

    setComentario(nuevoComentario){
        this._comentario = nuevoComentario;
        return this._comentario;
    }

}