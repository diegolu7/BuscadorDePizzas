export function CargarCard(nombre,precio,img,ingredientes){
  const card = document.querySelector("#respuesta");
  card.classList.add("card");
  card.innerHTML=
        `<h2 class="card__title">Pizza: ${nombre} $${precio}</h2>
        <img class="card__img" src="${img}" alt="${nombre}-pizza">
        <h3 class="card__subtitle">Ingredientes</h3>
        <ul class="card__list">

        </ul>`;

 const ul = document.querySelector("#respuesta > ul");
 ul.classList.add("card__list");
 let pintar = ingredientes.map((ingrediente)=>{
  const li = document.createElement("li");
  li.classList.add("card__list__item");
  li.textContent= ingrediente;
  ul.appendChild(li);
});
}