
const rutinas = {
    lunes: [
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" },
        { nombre: "4x12 Multipress", imagen: "assets/img/lunes/multipress.webp" },
        { nombre: "4x10 Fondo", imagen: "assets/img/lunes/fondo.png" },
        { nombre: "4x12 Triceps Polea", imagen: "assets/img/lunes/tricepspolea.webp" },
        { nombre: "4x8-12 Mancuerna ", imagen: "assets/img/lunes/mancuernaselevaciones.png" },
        { nombre: "4x10-12 chest press", imagen: "assets/img/jueves/chestpress.webp" },
        { nombre: "4x8-al fallo Triceps press", imagen: "assets/img/lunes/448-906-triceps-press.png" },
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" }

    ],
    martes: [
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" },
        { nombre: "4x10-12 Row",  imagen: "assets/img/jueves/Row.png" },
        { nombre: "4x10-12 Row/Rear deltoid", imagen: "assets/img/Martes/RowReardeltoid.jpeg" },
        { nombre: "4x10-12 PullDown", imagen: "assets/img/Martes/PullDown.webp" },
        { nombre: "4x10-12 seated row", imagen: "assets/img/martes/seatedrow.jpeg" },
        { nombre: "4x10-12 Barra biceps", imagen: "assets/img/Martes/Barraabiceps.png" },
        { nombre: "4x10-12 Biceps curl", imagen: "assets/img/Martes/Barrabiceps.jpeg" },
        { nombre: "4x24 Mancuernas", imagen: "assets/img/Martes/martillo.jpg" },
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" }
    ],
    miercoles: [
        { nombre: "4x10-12 Seated leg press", imagen: "assets/img/miercoles/Seatedlegpress.png" },
        { nombre: "4x10-12 Seated leg curl", imagen: "assets/img/miercoles/Seatedlegcurl.webp" },
        { nombre: "4x10-12 Leg extension", imagen: "assets/img/miercoles/legextension.jpeg" },
        { nombre: "4x10 Sentadilla", imagen: "assets/img/miercoles/sentadilla.jpg" },
        { nombre: "4x10-12 Horizontal Calf", imagen: "assets/img/miercoles/horizontalcalf.jpg" },
        { nombre: "4x10-12 Hip adductor", imagen: "assets/img/miercoles/hipadductor-abductor.jpeg" },
        { nombre: "4x10-12 Hip abductor", imagen: "assets/img/miercoles/hipadductor-abductor.jpeg" },
        { nombre: "4x10-12 Leg press", imagen: "assets/img/miercoles/legpress.webp" },
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" }
    ],
    jueves: [
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" },
        { nombre: "4x10-12 Row", imagen: "assets/img/miercoles/Row.png" },
        { nombre: "4x10-12 chest press", imagen: "assets/img/jueves/chestpress.webp" },
        { nombre: "4x8-10 pectoral fly inclinado", imagen: "assets/img/jueves/pectoralfly.jpeg" },
        { nombre: "4x10-12 rowing", imagen: "assets/img/jueves/rowing.webp" },
        { nombre: "4x10-12 front lat pulldown", imagen: "assets/img/jueves/frontlat.png" },
        { nombre: "4x10-12 rear delt (espalda)", imagen: "assets/img/jueves/reardelt.png" },
        { nombre: "4x10-12 pec fly (pecho)", imagen: "assets/img/jueves/reardelt.png" },
        { nombre: "4x10-12 Seated cable row", imagen: "assets/img/jueves/seated-cable-row-800.jpg" },        
        { nombre: "20 min cardio caminadora", imagen: "assets/img/Martes/caminadora.jpg" }
    ],
    viernes: [
        { nombre: "Yoga ligero", imagen: "img/yoga.jpg" },
        { nombre: "Elevaciones laterales", imagen: "img/laterales.jpg" },
        { nombre: "Curl de bíceps", imagen: "img/biceps.jpg" },
        { nombre: "Remo con mancuerna", imagen: "img/remo.jpg" }
    ]
};

function mostrarRutina(dia) {
    const rutina = rutinas[dia];
    const titulo = document.getElementById('titulo-dia');
    const contenedor = document.getElementById('contenedor-ejercicios');
    const seccion = document.getElementById('rutina');

    titulo.textContent = `Rutina del ${dia.charAt(0).toUpperCase() + dia.slice(1)}`;
    contenedor.innerHTML = "";

    rutina.forEach(ej => {
        const div = document.createElement("div");
        div.className = "ejercicio";

        div.innerHTML = `
            <h3>${ej.nombre}</h3>
            <img src="${ej.imagen}" alt="${ej.nombre}">
        `;

        contenedor.appendChild(div);
    });

    seccion.classList.remove("rutina-oculta");
}
