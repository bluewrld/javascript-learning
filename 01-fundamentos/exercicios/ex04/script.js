const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let nome = window.prompt('Qual é seu nome?')
    res.innerHTML = `Olá, <strong>${nome}!</strong> É um grande prazer te conhecer! 🖖`
}