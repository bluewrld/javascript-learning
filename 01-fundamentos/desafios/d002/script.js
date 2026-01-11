var botao = document.getElementById('btn')
botao.addEventListener('click', clicar)

function clicar(){
    var nome = window.prompt('Qual seu nome?')
    var idade = window.prompt(`Olá ${nome}! Quantos anos você tem?`)
    window.prompt(`Acabei de conhecer o ${nome}, que tem ${idade} anos de idade!`)
}