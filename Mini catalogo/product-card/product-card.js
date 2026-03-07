class ProductCard extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {

    const nombre = this.getAttribute("nombre");
    const precio = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <div style="
        border:1px solid #ccc;
        padding:15px;
        margin:10px;
        width:200px;
        display:inline-block;
        border-radius:8px;
      ">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <strong>${precio}</strong>
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);
