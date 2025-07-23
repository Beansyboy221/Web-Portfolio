const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting && !element.classList.contains('visible') && !element.classList.contains('animating')) {
            element.classList.add('scrolled', 'animating');

            element.addEventListener('animationend', () => {
                element.classList.add('visible');
                element.classList.remove('animating');
                element.style.animation = 'none';
            }, { once: true });
        } 
        else if (!entry.isIntersecting && !element.classList.contains('animating')) {
            element.classList.remove('scrolled', 'visible');
            element.style.animation = '';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.scrollanim').forEach(element => {
    observer.observe(element);
});