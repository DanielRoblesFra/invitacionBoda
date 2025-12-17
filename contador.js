// 1. Inicializar AOS para que detecte el scroll
AOS.init({
    duration: 1000, 
    once: true,    
});

// 2. Definir la fecha (ESTA ES LA LÍNEA QUE FALTABA)
const fechaBoda = new Date("Sep 18, 2026 15:00:00").getTime();

// 3. Lógica del contador
const x = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Función interna para actualizar con rebote
    function actualizarElemento(id, nuevoValor) {
        const elemento = document.getElementById(id);
        if (!elemento) return; // Seguridad por si no encuentra el ID

        const valorActual = elemento.innerHTML;
        const nuevoValorStr = String(nuevoValor).padStart(2, '0');

        // Solo si el número cambió, disparamos la animación
        if (valorActual !== nuevoValorStr) {
            elemento.innerHTML = nuevoValorStr;
            
            // Reiniciar animación de rebote
            elemento.classList.remove("animar-rebote");
            void elemento.offsetWidth; // Truco para resetear animación CSS
            elemento.classList.add("animar-rebote");
        }
    }

    // Actualizamos cada bloque
    actualizarElemento("dias", dias);
    actualizarElemento("horas", horas);
    actualizarElemento("minutos", minutos);
    actualizarElemento("segundos", segundos);

    // Si la fecha ya pasó
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";
    }
}, 1000);


// Función para abrir la ventana del mapa
function abrirMapa() {
    document.getElementById("modalMapa").style.display = "flex";
}

// Función para cerrar la ventana del mapa
function cerrarMapa() {
    document.getElementById("modalMapa").style.display = "none";
}

// Cerrar si el usuario hace click fuera de la ventana blanca
window.onclick = function(event) {
    let modal = document.getElementById("modalMapa");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}