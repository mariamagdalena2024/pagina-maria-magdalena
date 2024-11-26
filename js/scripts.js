document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente.');

    // Animación suave al hacer scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición para las tarjetas de servicios
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Lazy loading para imágenes
    document.querySelectorAll('img.lazyload').forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
    });
});