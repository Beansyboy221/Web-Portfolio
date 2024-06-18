const scrollElements = document.querySelectorAll(".scrollanim");

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return elementTop <= windowHeight && elementBottom >= 150;
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el)) {
            el.classList.add('scrolled');
        } else {
            el.classList.remove('scrolled');
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

window.addEventListener('load', () => {
    handleScrollAnimation();
});