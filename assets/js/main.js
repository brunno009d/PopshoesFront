const contenedorCalzado = document.querySelector(".productos")
const numeroCarrito = document.querySelector(".navbar-cart a")

function cargarCalzados(){
    // Limpiar el contenedor antes de añadir productos para evitar duplicados
    contenedorCalzado.innerHTML = "";
    
    calzados.forEach(calzado => {
        const idPrecio = document.getElementById("precio-zap");
        const precioZap = `$${calzado.precio.toLocaleString()}`;

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto-imagen">
            <img src="${calzado.imagen}" alt="${calzado.titulo}">
        </div>
        <h3>${calzado.titulo}</h3>
        <p id="precio-zap">${precioZap}</p>
        <button id="${calzado.id}">Añadir al carrito</button>
        `;

        // Añadir event listener al botón
        const boton = div.querySelector('button');
        boton.addEventListener('click', agregarProductosCarrito);

        contenedorCalzado.appendChild(div);
    });
}

// Cargar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarCalzados();
});

// carrito
let calzadosCarrito = JSON.parse(localStorage.getItem("calzado-carrito")) || [];
actualizarNumeroCarrito();

// e devuelve una 
function agregarProductosCarrito(e){
     const id = e.currentTarget.id;
     const calzadoAgregado = calzados.find(calzado => calzado.id === id);

    if(calzadosCarrito.some(calzado => calzado.id === id)){
        const indice = calzadosCarrito.findIndex(calzado => calzado.id === id);
        calzadosCarrito[indice].cantidad++;

    } else{
        const nuevoCalzado = { ...calzadoAgregado, cantidad: 1 };
        calzadosCarrito.push(nuevoCalzado);
    }


     actualizarNumeroCarrito();
     localStorage.setItem("calzado-carrito", JSON.stringify(calzadosCarrito));
}

function actualizarNumeroCarrito(){
    let numero = calzadosCarrito.reduce((acc, calzado) => acc + calzado.cantidad, 0)
    
    if (numeroCarrito) {
        numeroCarrito.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> <span style="color: white;">${numero}</span>`;
    }
}

function filtro(){
    
}
