const botao = document.getElementById('btn')
const res = document.getElementById('res')

botao.addEventListener('click', clicar)

function clicar(){
    let n1 = Number(window.prompt('Digite um número:'))

    if (n1%2 == 0){
        res.innerHTML = `O número ${n1} que foi digitado é <strong>PAR!</strong>`
    } else {
        res.innerHTML = `O número ${n1} que foi digitado é <strong>ÍMPAR!</strong>`
    }
}