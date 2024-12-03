// Animação texto sendo digitado no começo

var typed = new Typed('#h1-animation', {
    strings: ['escritor', 'jornalista', 'professor', 'pesquisador', 'revisor', 'crítico cultural'],
    typeSpeed: 150,
    loop: true,
});



// Carrossel 
var swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    effect: "fade",
});