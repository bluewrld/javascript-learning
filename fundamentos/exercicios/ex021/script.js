const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')

let numero = 0
let tentativas = 0

botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    if(numero === 0){
        numero = Math.floor(Math.random() * 100) + 1
        res.innerHTML = `<p>Já pensei em um valor entre 1 e 100...</p>`
    }
    gerar()
}

function gerar(){
    let palpite = Number(window.prompt('Qual é o seu palpite?'))
    
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        res.innerHTML += `<p>Por favor, digite um número válido entre 1 e 100!</p>`
        return
    }
    
    tentativas++
    
    if(palpite === numero){
        res.innerHTML += `<p>Você falou <mark>${palpite}</mark>. <strong style="color: green;">PARABÉNS! Você acertou! Eu tinha sorteado o valor ${numero}!</strong></p>`
        numero = 0
        tentativas = 0
    } else if(palpite < numero){
        res.innerHTML += `<p>Você falou <mark>${palpite}</mark>. Meu número é <strong style="color: red;">MAIOR!</strong></p>`
    } else {
        res.innerHTML += `<p>Você falou <mark>${palpite}</mark>. Meu número é <strong style="color: blue;">MENOR!</strong></p>`
    }
}

function limpar(){
    res.innerHTML = ''
    numero = 0
    tentativas = 0
}