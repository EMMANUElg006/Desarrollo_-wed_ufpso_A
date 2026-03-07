const productos = [
  {
    nombre: "Laptop",
    precio: "$1200",
    descripcion: "Laptop para trabajo y estudio"
  },
  {
    nombre: "Mouse Gamer",
    precio: "$50",
    descripcion: "Mouse con luces RGB"
  },
  {
    nombre: "Teclado Mecánico",
    precio: "$90",
    descripcion: "Teclado con switches azules"
  }
];

const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {

  const card = document.createElement("product-card");

  card.setAttribute("nombre", producto.nombre);
  card.setAttribute("precio", producto.precio);
  card.setAttribute("descripcion", producto.descripcion);

  catalogo.appendChild(card);

});