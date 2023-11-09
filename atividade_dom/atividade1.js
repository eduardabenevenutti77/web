let paragrafo = document.querySelector('#myParagraph');

paragrafo.addEventListener('mousseover', function(){
    paragrafo.classList.add('hover');
});

paragrafo.addEventListener('mousseout', function(){
    paragrafo.classList.remove('hover');
})

function mostrarOla(){
    let inputNome = document.querySelector('#nome').value;
    document.querySelector('#msg').textContent = 'olá '+inputNome;
}

function mostrarOla2(){
    let inputNome = document.querySelector('#nome').value;
    document.querySelector('#msg2').textContent = 'olá '+inputNome;
}

let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    mostrarOla2()
});