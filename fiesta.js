// Función para abrir cualquier modal por ID
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "flex";
    // Bloquear scroll del cuerpo para que no se mueva al ver el modal
    document.body.style.overflow = "hidden";
}

// Función para cerrar cualquier modal por ID
function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "none";
    // Devolver el scroll al cuerpo
    document.body.style.overflow = "auto";
}

// Cerrar modales si se hace clic fuera de la caja blanca
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-info')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

/* ================================================= */
/* ANIMACIÓN SCROLL SECCIÓN 4                        */
/* ================================================= */
const tarjetas = document.querySelectorAll(".tarjeta");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("activa");
        } else {
            entry.target.classList.remove("activa"); 
        }
    });
}, {
    threshold: 0.3
});

tarjetas.forEach(t => observer.observe(t));

const tituloFiesta = document.querySelector(".txtInformacion");
const textoFiesta = document.querySelector(".detalles");

const observerTexto = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("activo");
        } else {
            entry.target.classList.remove("activo");
        }
    });
}, {
    threshold: 0.4
});

observerTexto.observe(tituloFiesta);
observerTexto.observe(textoFiesta);

/* ================================================= */
/* CARRUSEL GALERÍA SECCIÓN 5                        */
/* ================================================= */
const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  speed: 900,
});
/* ================================================= */
/* ANIMACIÓN SCROLL SECCIÓN 5                        */
/* ================================================= */
const galeria = document.querySelector(".galeria");
const tituloGaleria = document.querySelector(".txtGaleria");
const subGaleria = document.querySelector(".subGaleria");
const carrusel = document.querySelector(".carousel");

const observerGaleria = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tituloGaleria.classList.add("activo");
            subGaleria.classList.add("activo");
            carrusel.classList.add("activo");
        } else {
            tituloGaleria.classList.remove("activo");
            subGaleria.classList.remove("activo");
            carrusel.classList.remove("activo");
        }
    });
}, {
    threshold: 0.3
});

observerGaleria.observe(galeria);

