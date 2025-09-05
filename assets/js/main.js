const calzados = [
    {
        id: "calz-01",
        titulo: "Zap1",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        }
    },
    {
        id: "calz-02",
        titulo: "Zap2",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "mujer",
            nombre: "mujer"
        }
    },
    {
        id: "calz-03",
        titulo: "Zap3",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        }
    },
    {
        id: "calz-04",
        titulo: "Zap4",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "mujer",
            nombre: "mujer"
        }
    },
    {
        id: "calz-05",
        titulo: "Zap5",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        }
    },
    {
        id: "calz-06",
        titulo: "Zap6",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        }
    },
    {
        id: "calz-07",
        titulo: "Zap7",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "mujer",
            nombre: "mujer"
        }
    },
    {
        id: "calz-08",
        titulo: "Zap8",
        imagen: "../assets/img/diseño sin título (2).png",
        genero: {
            id: "hombre",
            nombre: "Hombre"
        }
    }
]

function cargarCalzados(){
    array.forEach(calzado => {
        const div = document.createElement("div");
        div.classList.add("calzado");
    });

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