const scrollElements = document.querySelectorAll(".scrollanim");

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return elementTop <= windowHeight;
};

const displayScrollElement = (el) => {
    el.classList.add('scrolled');
};

const hideScrollElement = (el) => {
    el.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
