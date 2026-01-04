var botao1 = document.getElementById('btn1')
var botao2 = document.getElementById('btn2')
var botao3 = document.getElementById('btn3')

botao1.addEventListener('click', clicar1)
botao2.addEventListener('click', clicar2)
botao3.addEventListener('click', clicar3)


function clicar1(){
    window.alert('Você clicou no 1º Botão!')
}

function clicar2(){
    window.alert('Você clicou no 2º Botão!')
}

function clicar3(){
    window.alert('Você clicou no 3º Botão!')
}