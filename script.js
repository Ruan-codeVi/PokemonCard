
// Animação do movimento para acontecer
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const soud = document.querySelector('.audio')
// itens
const titulo = document.querySelector('.titulo');
const charizard = document.querySelector('.pokemon');
const forca = document.querySelector('.forca button');
const descricao = document.querySelector('.info h3');
const atributos = document.querySelector('.atributos');

// Evento de movimentação animada
container.addEventListener('mousemove', (e)=>{

let xEixos = (window.innerWidth /2 - e.pageX)/23;
let yEixos = (window.innerHeight /2 - e.pageY)/23;
card.style.transform = `rotateY(${xEixos}deg) rotateX(${yEixos}deg)`

});

// Animação-Mouse Dentro
container.addEventListener('mouseenter',(e)=>{
card.style.transform = 'none';
// Dando efeito de  Poppout-animação
titulo.style.transform = 'translateZ(190px)';
charizard.style.transform = 'translateZ(200px)';
forca.style.transform = 'translateZ(100px)';
descricao.style.transform = 'translateZ(100px)';
atributos.style.transform = 'translateZ(90px)';

});



// Animação-Mouse Fora
container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `all 0.5s aesy`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Poppback animação
titulo.style.transform = 'translateZ(0px)';
charizard.style.transform = 'translateZ(0px) rotateZ(0deg)';
forca.style.transform = 'translateZ(0px)';
descricao.style.transform = 'translateZ(0px)';
atributos.style.transform = 'translateZ(0px)';
})
