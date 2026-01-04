const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')

botao.addEventListener('click', gerar)
clear.addEventListener('click', limpar)

function gerar(){
    let numero = Math.floor(Math.random() * 101)
    res.innerHTML += `<p>Acabei de pensar no número <mark>${numero}</mark>!<br></p>`
}

function limpar(){
    res.innerHTML = ''
}