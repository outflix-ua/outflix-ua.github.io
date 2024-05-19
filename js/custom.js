document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos con la clase 'scroll-link'
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace

            // Obtener el valor del atributo data-scroll-to
            const targetId = this.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                window.scrollBy(0, -30); // 30px arriba para que no quede la cabecera tapada por la navbar
            } else if (targetId === 'index') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
});
