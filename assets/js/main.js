document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calzados").innerHTML = cargarCalzados();
});

const contenedorCalzado = document.querySelector(".productos")
const numeroCarrito = document.querySelector(".navbar-cart a")

function cargarCalzados(){
    calzados.forEach(calzado => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto-imagen">
            <img src="${calzado.imagen}" alt="${calzado.titulo}">
        </div>
        <h3>${calzado.titulo}</h3>
        <p>$${calzado.precio}</p>
        <button id="${calzado.id}">Añadir al carrito</button>
        `;

        // Añadir event listener al botón
        const boton = div.querySelector('button');
        boton.addEventListener('click', agregarProductosCarrito);

        contenedorCalzado.appendChild(div);
    });
}

cargarCalzados();

// carrito
let calzadosCarrito = JSON.parse(localStorage.getItem("calzado-carrito")) || [];
actualizarNumeroCarrito();

// e devuelve una 
function agregarProductosCarrito(e){
     const id = e.currentTarget.id;
     const calzadoAgregado = calzados.find(calzado => calzado.id === id);

     // some nos devuelve true or false de un elemento si es igual
    if(calzadosCarrito.some(calzado => calzado.id === id)){
        // definimos el indice de los productos
        const indice = calzadosCarrito.findIndex(calzado => calzado.id === id);
        calzadosCarrito[indice].cantidad++;

    } else{
        // Le agregamos una nueva propiedad
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


/*
<div class="producto">
         <div class="producto-imagen">
            <img src="../assets/img/Diseño sin título (2).png" alt="zapato1">
            </div>
            <h3>Zapato 1</h3>
            <p>Precio: $100.000</p>
            <button>comprar</button>
            </div>
*/