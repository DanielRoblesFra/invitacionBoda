const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let fireworks = [];

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];

        for (let i = 0; i < 40; i++) {
            this.particles.push({
                x: this.x,
                y: this.y,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 3 + 1,
                radius: Math.random() * 2 + 1,
                alpha: 1
            });
        }
    }

    update() {
        this.particles.forEach(p => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.015;
        });

        this.particles = this.particles.filter(p => p.alpha > 0);
    }

    draw() {
        this.particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 215, 180, ${p.alpha})`;
            ctx.fill();
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach(f => {
        f.update();
        f.draw();
    });

    fireworks = fireworks.filter(f => f.particles.length > 0);
    requestAnimationFrame(animate);
}

/* Crear fuegos continuamente */
setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;
    fireworks.push(new Firework(x, y));
}, 900);

animate();


/* ================================================= */
/* ANIMACIÓN TEXTO FINAL (Título y Párrafo)          */
/* ================================================= */
function animarTextoFinal() {
    const texto = document.getElementById("texto-final");
    const textoOriginal = texto.textContent.trim();

    texto.innerHTML = "";

    textoOriginal.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animation = `caidaLetra 0.6s ease forwards`;
        span.style.animationDelay = `${index * 0.06}s`;
        texto.appendChild(span);
    });
}

function animarParrafoFinal() {
    const parrafo = document.getElementById("parrafo-final");
    const textoOriginal = parrafo.textContent.trim();

    parrafo.innerHTML = "";

    textoOriginal.split(" ").forEach((palabra, index) => {
        const span = document.createElement("span");
        span.textContent = palabra;
        span.style.animation = `aparicionPalabra 0.6s ease forwards`;
        span.style.animationDelay = `${index * 0.15}s`;
        parrafo.appendChild(span);
        
        // Agregar espacio después de cada palabra (excepto la última)
        if (index < textoOriginal.split(" ").length - 1) {
            parrafo.appendChild(document.createTextNode(" "));
        }
    });
}

/* Observer para activar animaciones cuando la sección sea visible */
const seccionFinal = document.querySelector(".final");

const observerFinal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarTextoFinal();
            animarParrafoFinal();
        }
    });
}, {
    threshold: 0.4
});

if (seccionFinal) {
    observerFinal.observe(seccionFinal);
}