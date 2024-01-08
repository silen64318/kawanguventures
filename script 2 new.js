document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    });
});