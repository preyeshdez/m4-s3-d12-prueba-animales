import Leon from "./classes/Leon.js";
import Aguila from "./classes/Aguila.js";
import Lobo from "./classes/Lobo.js";
import Oso from "./classes/Oso.js";
import Serpiente from "./classes/Serpiente.js";

let animales = [];
let imagenSrc;
let sonidoSrc;

let data = (() => {
    try {
        const url = "http://127.0.0.7:5501/animales.json";

        const getData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            const { animales } = json;
            return animales;
        }
        return { getData };

    } catch (error) {
        console.log(error);
    }
})();

const crearCard = () => {
    try {
        let plantilla = ``;

        for (const animal of animales) {
            plantilla += `
            <div class="card m-3">
            <div class="bg-dark text-white">
                <img height="200" src="./assets/imgs/${animal.getImg()}" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onclick="modalDetalles(${animales.indexOf(animal)})">
                <div>
                <button onclick="playSonido('${animal.getSonido()}')" class="btn btn-secondary w-100"> <img height="30"
                    src="assets/imgs/audio.svg"> </button>
                </div>
            </div>
            </div>
            `;
        }

        document.getElementById("Animales").innerHTML = plantilla;

    } catch (error) {
        console.log(error);
    }
}

window.modalDetalles = (i) => {
    try {
        let modalBody = document.querySelector(".modal-body");
        let animal = animales[i];
        modalBody.innerHTML =`
        <div class="px-3 pb-2">
        <div class="card m-auto bg-dark text-white border-0">
          <img
            src="./assets/imgs/${animal.getImg()}"
            class="d-block m-auto w-100"
          />
          <div class="card-body text-center">
            <h6 class="card-text ">${animal.getNombre()}</h6>
            <h6 class="card-text ">${animal.getEdad()}</h6>
            <hr/>
            <h6 class="card-text m-0">Comentarios</h6>
            <p>${animal.getComentario()}</p>
          </div>
        </div>
        </div>
        `;
    } catch (error) {
        console.log(error);
    }
}

window.playSonido = (source) => {
    try {
        const animalBuscado = animales.find((animal)=>animal.getSonido() == source);
        switch(animalBuscado.getSonido()){
            case 'Rugido.mp3':
                animalBuscado.Rugir();
                break;
            case 'Aullido.mp3':
                animalBuscado.Aullar();
                break;
            case 'Siseo.mp3':
                animalBuscado.Sisear();
                break;
            case 'Grunido.mp3':
                animalBuscado.Grunir();
                break;
            case 'Chillido.mp3':
                animalBuscado.Chillar();
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

// window.playSonido = (source) => {
//     try {
//         let sonido = new Audio(`./assets/sounds/${source}`);
//         sonido.play();
//     } catch (error) {
//         console.log(error);
//     }
// }

document.getElementById("animal").addEventListener("change", async (evento) => {
    try {
        const animalSelect = evento.target.value;
        const animales = await data.getData();
        const animalEncontrado = await animales.find((animal) => animal.name == animalSelect);
        imagenSrc = animalEncontrado.imagen;
        sonidoSrc = animalEncontrado.sonido;

        document.getElementById("preview").style.backgroundSize = `cover`;
        document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
    } catch (error) {
        console.log(error);
    }
})

document.getElementById("btnRegistrar").addEventListener("click", () => {
    try {
        const nombreInput = document.getElementById("animal");
        const edadInput = document.getElementById("edad");
        const comentariosInput = document.getElementById("comentarios");

        const nombre = nombreInput.value;
        const edad = edadInput.value;
        const comentarios = comentariosInput.value;

        if (nombre && edad && comentarios) {
            switch (nombre) {
                case "León":
                    let leon = new Leon(nombre, edad, comentarios, imagenSrc, "Rugido.mp3");
                    animales.push(leon);
                    console.log(animales);
                    crearCard(leon);
                    break;
                case "Lobo":
                    let lobo = new Lobo(nombre, edad, comentarios, imagenSrc, sonidoSrc);
                    animales.push(lobo);
                    console.log(animales);
                    crearCard(lobo);
                    break;

                case "Oso":
                    let oso = new Oso(nombre, edad, comentarios, imagenSrc, sonidoSrc);
                    animales.push(oso);
                    console.log(animales);
                    crearCard(oso);
                    break;

                case "Serpiente":
                    let serpiente = new Serpiente(nombre, edad, comentarios, imagenSrc, sonidoSrc);
                    animales.push(serpiente);
                    console.log(animales);
                    crearCard(serpiente);
                    break;

                case "Águila":
                    let aguila = new Aguila(nombre, edad, comentarios, imagenSrc, sonidoSrc);
                    animales.push(aguila);
                    console.log(animales);
                    crearCard(aguila);
                    break;
            }

            nombreInput.selectedIndex = null;
            edadInput.selectedIndex = null;
            comentariosInput.value = null;

        } else {
            alert("Debe ingresar todos los datos");
        }

    } catch (error) {
        console.log(error);
    }
})