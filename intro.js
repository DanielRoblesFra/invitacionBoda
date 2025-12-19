document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const stamp = document.getElementById('stamp');
    const intro = document.getElementById('intro-sobre');
    const contenido = document.getElementById('contenido-web');

    stamp.addEventListener('click', () => {
        envelope.classList.add('open');

        setTimeout(() => {
            intro.classList.add('oculto');
            contenido.classList.add('visible');

            if (window.AOS) {
                AOS.refreshHard();
                window.dispatchEvent(new Event('scroll'));
            }
        }, 1400);
    });
});
