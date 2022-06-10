import { CargarCard } from "./CargarCard.js";
import { data } from "./data.js";
import { LimpiarCard } from "./LimpiarCard.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./LocalStorage.js";
import { mostrarMensaje } from "./MostrarMensaje.js";

const input = document.querySelector("#id");
const btn = document.querySelector("#btn");


btn.addEventListener('click', (e) => {
  e.preventDefault();

  LimpiarCard();

  guardar_localStorage(data,"pizzas");
  const dataLS = obtener_localStorage("pizzas");

  if(input.value < -1 || input.value > 7){
    mostrarMensaje("Pizza no encontrada.");
  }

  for (let i = 0; i < dataLS.length; i++) {
    if (dataLS[i].id == input.value) {
      CargarCard(dataLS[i].nombre, dataLS[i].precio, dataLS[i].img, dataLS[i].ingredientes,)
    }
  }
});