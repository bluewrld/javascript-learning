var botao = document.getElementById('btn')
botao.addEventListener('click', clicar)

function clicar(){
    var numero = Number.parseInt(window.prompt('Digite um número inteiro qualquer'))

    var antecessor = numero - 1
    var sucessor = numero + 1

    window.alert(`Antes de ${numero}, temos o número ${antecessor}.
    Depois de ${numero}, temos o número ${sucessor}.`)
}