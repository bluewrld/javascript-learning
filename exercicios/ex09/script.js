const botao = document.getElementById('btn')
const zerarBtn = document.getElementById('zerar')
const res = document.getElementById('res')

let contador = 0

botao.addEventListener('click', clicar)
zerarBtn.addEventListener('click', zerarContador)

res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`

function clicar(){
    contador++
    res.innerHTML = `O contador está com <mark>${contador}</mark> clique${contador > 1 ? 's' : ''}.`
}

function zerarContador(){
    contador = 0
    res.innerHTML = ''
}