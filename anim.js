const scrollElements = document.querySelectorAll(".scrollanim");

const elementInView = (el, offsetPercentage = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const offset = (windowHeight * offsetPercentage) / 100;
    return elementTop <= (windowHeight - offset);
};

const displayScrollElement = (el) => {
    el.classList.add('scrolled');
};

const hideScrollElement = (el) => {
    el.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 20)) { // 20% offset
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        };
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});