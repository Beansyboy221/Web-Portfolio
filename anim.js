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

const handleSmallWindows = () => {
    const mainElement = document.querySelector("main");
    const navElement = document.querySelector("#navbar");
    if (window.innerWidth < 1000) {
        mainElement.classList.add("altmain");
        navElement.classList.add("altnavbar");
    } else {
        mainElement.classList.remove("altmain");
        navElement.classList.remove("altnavbar");
    }
};

window.addEventListener('resize', () => {
    handleSmallWindows();
});

window.addEventListener('DOMContentLoaded', () => {
    handleSmallWindows();
});