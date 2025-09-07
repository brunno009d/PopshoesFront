const calzados = [
    {
        id: "calz-01",
        titulo: "Zap1",
        precio: 50000,
        imagen: "../assets/img/banner 1.webp",
        genero: {
            id: "hombre",
            nombre: "Hombre"
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
        id: "calz-02",
        titulo: "Zap2",
        precio: 90000,
        imagen: "../assets/img/banner 2.webp",
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
        id: "calz-03",
        titulo: "Zap3",
        precio: 50000,
        imagen: "../assets/img/banner 3.webp",
        genero: {
            id: "hombre",
            nombre: "Hombre"
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
        titulo: "Zap4",
        precio: 65000,
        imagen: "../assets/img/banner 4.webp",
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
        titulo: "Zap5",
        precio: 60000,
        imagen: "../assets/img/banner 5.webp",
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
        titulo: "Zap6",
        precio: 80000,
        imagen: "../assets/img/banner 6.webp",
        genero: {
            id: "hombre",
            nombre: "Hombre"
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
        <button ${calzado.id}>Añadir al carrito</button>
        `;

        contenedorCalzado.appendChild(div);
    });
}

cargarCalzados();

// carrito
const productosCarrito = [];

// e devuelve una 
function agregarProductosCarrito(e){
     
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