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

// Aparição do botão de voltar ao topo
const voltarTopo = document.getElementById('voltar-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        voltarTopo.classList.add('show');
    } else {
        voltarTopo.classList.remove('show');
    }
});
