const burger = {
    header: document.querySelector('#rec357038399'),
    block: document.querySelector('#rec357029944'),
    trigger: document.querySelector('#rec357038399 .trigger'),
    isOpened: false
};
const clipPathParams = {
    right: 1600,
    top: 0,
    radius: 0
};
const docBody = document.querySelector('body');

function toggleBurgerSticking() {
    if ($(window).scrollTop() > 80) {
        burger.header.classList.remove('burger-header-lose');
    } else {
        burger.header.classList.add('burger-header-lose');
    }
}

function placeClipPath() {
    burger.block.style.clipPath = `circle(${burger.isOpened ? clipPathParams.radius : 0}px at ${clipPathParams.right}px 0)`;
}

function setBurgerStyles() {
    burger.isOpened = !burger.isOpened;
    if (burger.isOpened) {
        docBody.classList.add('burger-opened');
        burger.trigger.classList.add('opened');
    } else {
        docBody.classList.remove('burger-opened');
        burger.trigger.classList.remove('opened');
    }
    placeClipPath();
}

function handleScreenResize() {
    const width = $(window).width();
    const height = $(window).height();
    clipPathParams.right = width;
    clipPathParams.radius = Math.sqrt(width ** 2 + height ** 2);
    placeClipPath();
}

function initBurger() {
    burger.header.classList.add('burger-fix', 'burger-header', 'burger-header-lose');
    burger.block.classList.add('burger-fix', 'burger-block');
    burger.trigger.addEventListener('click', setBurgerStyles);

    burger.block.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', setBurgerStyles);
    });

    handleScreenResize();

    window.addEventListener('resize', handleScreenResize);
    window.addEventListener('scroll', toggleBurgerSticking);
}

initBurger();