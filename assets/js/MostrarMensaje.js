export function mostrarMensaje(mensaje){
const h4 = document.querySelector("#mensaje");
h4.textContent = mensaje;
setTimeout(() => {
  h4.textContent = "";
}, 2000);
}




