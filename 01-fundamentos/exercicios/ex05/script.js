const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

window.alert('Seja bem-vindo(a) ao meu site!')

function clicar(){
    let n1 = Number(window.prompt('Digite um número: '))
    
    let dobro = n1 * 2
    let metade = n1 / 2
    
    res.innerHTML = `O dobro de ${n1} é ${dobro} e a metade é ${metade}!`
}