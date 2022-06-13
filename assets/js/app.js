import { CargarCard } from "./CargarCard.js";
import { data } from "./data.js";
import { LimpiarCard } from "./LimpiarCard.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./LocalStorage.js";
import { mostrarMensaje } from "./MostrarMensaje.js";

const input = document.querySelector("#id");
const btn = document.querySelector("#btn");
const spiner = document.querySelector("#loading");
const h4 = document.querySelector("#mensaje");


btn.addEventListener('click', (e) => {
  e.preventDefault();

  h4.textContent = "";//limpio mensaje
  LimpiarCard();
  spiner.style.display="inline-block";
  setTimeout( () => {
    try {
      guardar_localStorage(data,"pizzas");
      const dataLS = obtener_localStorage("pizzas");

      if(input.value < -1 || input.value >= 6  ){
        mostrarMensaje("Pizza no encontrada.");
      }//
      if(input.value === ""){
        mostrarMensaje("Debe ingresar un ID de Pizza");
        console.log("KILL");
        break;
      }//

      for (let i = 0; i < dataLS.length; i++) {
        if (dataLS[i].id == input.value) {
          CargarCard(dataLS[i].nombre, dataLS[i].precio, dataLS[i].img, dataLS[i].ingredientes,)
        }
      }
  }
  finally {
      spiner.style.display="none";
  }
 }, 500);
});






