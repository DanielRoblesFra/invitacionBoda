document.addEventListener('DOMContentLoaded', () => {
    const sealBtn = document.getElementById('seal-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    sealBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        // Ocultamos el sello suavemente desde CSS, no necesitamos JS extra aquí
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});