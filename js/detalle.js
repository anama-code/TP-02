let productos = localStorage.getItem("productos");
console.log(productos);

productos = JSON.parse(productos);

let id = sessionStorage.getItem("id");
console.log(id);

const elegido = productos.find((producto) => producto.codigo === id);
console.log(elegido);

if(elegido){
const contenedorDetalles= document.createElement("div");
// contenedorDetalles.classList.add("detalle");
contenedorDetalles.innerHTML=`
<h2>${elegido.codigo}</h2>
<h3>${elegido.descripcion}</h3>
<p>${elegido.detalle}</p>
<div id= "centrarImagen">
<img src="${elegido.imagen}" alt="">
</div>
<p>${elegido.precio}</p>
</div>`;

detalle.appendChild(contenedorDetalles);
}

const p = document.createElement("p");

  const estrellas = [];

  for (let i = 0; i < elegido.puntuacion.length; i++) {
    estrellas[i] = "⭐";
  }

  p.textContent = estrellas.join("");
  detalle.appendChild(p);
