const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add('scrolled');

            element.addEventListener('animationend', () => {
                element.classList.add('visible');
                element.style.animation = 'none';
            }, { once: true });
        } 
        else {
            entry.target.classList.remove('scrolled', 'visible');
            entry.target.style.animation = '';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scrollanim').forEach(element => {
    observer.observe(element);
});
