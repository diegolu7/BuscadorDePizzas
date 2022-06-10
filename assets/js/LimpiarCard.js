export function LimpiarCard(){
  const card = document.querySelector("#respuesta");
  card.innerHTML="";
  card.classList.remove("card");
}