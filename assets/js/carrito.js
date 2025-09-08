

let calzadoCarrito = JSON.parse(localStorage.getItem("calzado-carrito")) || [];

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoCalzados = document.querySelector("#carrito-productos");
const contenedorCarritoPagar = document.querySelector("#carrito-pagar");
const contenedorCarritoComprado = document.querySelector("#compra");

function cargarCarrito(){
    if (calzadoCarrito && calzadoCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoCalzados.classList.remove("disabled");
        contenedorCarritoPagar.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoCalzados.innerHTML = "";
    
        calzadoCarrito.forEach(calzado => {
            const div = document.createElement("div");
            div.classList.add("carrito-contenido");
            div.innerHTML = `
                <img class="carrito-imagen" src="${calzado.imagen}" alt="">
                <div class="producto-descripcion">
                    <h4>${calzado.titulo}</h4>
                </div>
                <div class="producto-precio">
                    <p>$${calzado.precio}</p>
                </div>
                <div class="producto-cantidad">
                    <p>${calzado.cantidad}</p>
                </div>
                <button onclick="eliminarDelCarrito('${calzado.id}')"> <i class="fa-solid fa-x"></i> </button>
            `;
            
            contenedorCarritoCalzados.append(div);
        });
        
        actualizarTotal();
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoCalzados.classList.add("disabled");
        contenedorCarritoPagar.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");   
    }
}

function eliminarDelCarrito(id) {
    // buscar el indice del producto
    const indice = calzadoCarrito.findIndex(calzado => calzado.id === id);
    
    if (indice !== -1) {
        calzadoCarrito.splice(indice, 1);
        localStorage.setItem("calzado-carrito", JSON.stringify(calzadoCarrito));
        cargarCarrito();
    }
}

function actualizarTotal() {
    const totalElement = document.getElementById('total-pagar');
    
    if (totalElement) {
        const total = calzadoCarrito.reduce((sum, calzado) => {
            return sum + (calzado.precio * calzado.cantidad);
        }, 0);

        totalElement.textContent = `$${total.toLocaleString()}`;
    }
}

cargarCarrito();