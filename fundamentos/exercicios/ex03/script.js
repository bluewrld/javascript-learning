const botao = document.getElementById('btn')
botao.addEventListener('click', clicar)

function clicar(){
    let nome = window.prompt('Qual é seu nome?')
    window.alert(`Olá ${nome}! É um prazer te conhecer!`)
}