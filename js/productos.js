const listaProductos = document.querySelector("#listaProductos");
let productos;
localStorage.clear();
const cargarProductos = async () => {
  listaProductos.innerHTML = "";
  productos = localStorage.getItem("productos");

  if (productos == null) {
    const response = await fetch("productos.json");
    productos = await response.json();

    localStorage.setItem("productos", JSON.stringify(productos));
  }

  if (typeof productos == "string") {
    productos = JSON.parse(productos);
  }

  productos.forEach(crearProducto);
};


const crearProducto = (producto) => {
  const h4 = document.createElement("h4");
  h4.textContent = producto.codigo;

  const p = document.createElement("p");
  p.textContent = producto.descripcion;
  
  const button = document.createElement("button");
  button.textContent = "+ info";
  button.setAttribute("data-id", producto.codigo);

  button.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        sessionStorage.setItem("id", id);
        
        // console.log(localStorage.getItem("productos"));
        // updateLocalStorage(productos);
        
        window.location = "productos.html";
        

})

  
  listaProductos.appendChild(h4);
  listaProductos.appendChild(p);
  listaProductos.appendChild(button);

};

cargarProductos();
// console.log(productos);



 