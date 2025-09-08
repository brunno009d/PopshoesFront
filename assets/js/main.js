const calzados = [
    {
        id: "calz-01",
        titulo: "Air Forece 1 Triple Wiite",
        precio: 112000,
        imagen: "../assets/img/AF1 WHITE.webp",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        },
        marca:{
            id: "nike",
            nombre: "Nike"
        },
        color:{
            id: "axul",
            nombre: "Azul"
        },
        famosos:{
            id: "badbunny",
            nombre: "Badbunny"
        }
    },
    {
        id: "calz-02",
        titulo: "Nike P-6000 Metallic Silver",
        precio: 136000,
        imagen: "../assets/img/NikeP-6000 'Metallic Silver.webp",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        },
        marca:{
            id: "nike",
            nombre: "Nike"
        },
        color:{
            id: "axul",
            nombre: "Azul"
        },
        famosos:{
            id: "badbunny",
            nombre: "Badbunny"
        }
    },
    {
        id: "calz-03",
        titulo: "Puma Sneakers Gold",
        precio: 89000,
        imagen: "../assets/img/PUMA Sneakers Gold.webp",
        genero: {
            id: "mujer",
            nombre: "Mujer"
        },
        marca:{
            id: "puma",
            nombre: "Puma"
        },
        color:{
            id: "axul",
            nombre: "Azul"
        },
        famosos:{
            id: "badbunny",
            nombre: "Badbunny"
        }
    },
    {
        id: "calz-04",
        titulo: "Puma Speedcat OG",
        precio: 80000,
        imagen: "../assets/img/PUMASpeedcat OG 'Haute Coffee.webp",
        genero: {
            id: "mujer",
            nombre: "mujer"
        },
        marca:{
            id: "puma",
            nombre: "Puma"
        },
        color:{
            id: "axul",
            nombre: "Azul"
        },
        famosos:{
            id: "badbunny",
            nombre: "Badbunny"
        }
    },
    {
        id: "calz-05",
        titulo: "Adidas Superstar Iridescent",
        precio: 94000,
        imagen: "../assets/img/adidas Superstar 'Iridescent.webp",
        genero: {
            id: "mujer",
            nombre: "Mujer"
        },
        marca:{
            id: "adidas",
            nombre: "Adidas"
        },
        color:{
            id: "negro",
            nombre: "Negro"
        },
        famosos:{
            id: "madona",
            nombre: "Madona"
        }
    },
    {
        id: "calz-06",
        titulo: "Adidas Samba OG Black Cat",
        precio: 94000,
        imagen: "../assets/img/adidasSamba OG 'Black Cat.webp",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        },
        marca:{
            id: "adidas",
            nombre: "Adidas"
        },
        color:{
            id: "axul",
            nombre: "Azul"
        },
        famosos:{
            id: "badbunny",
            nombre: "Badbunny"
        }
    }
]

const contenedorCalzado = document.querySelector(".productos")

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
    // funciona como el contador
    let numero = calzadosCarrito.reduce((acc, calzado) => acc + calzado.cantidad, 0)
    numeroCarrito.innerHTML = numero
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