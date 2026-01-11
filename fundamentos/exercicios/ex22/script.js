const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')


botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let n1 = Number(window.prompt('Primeiro valor:'))
    let n2 = Number(window.prompt('Segundo valor:'))

    let somar = n1 + n2
    let subtrair = n1 - n2
    let multiplicar = n1 * n2
    let dividir = n1 / n2

    let valores = window.prompt(`Valores informados: ${n1} e ${n2}.
        O que vamos fazer?
        [1] Somar
        [2] Subtrair
        [3] Multiplicar
        [4] Dividir`)

        if(valores == 1){
            res.innerHTML = `<strong>Calculando...</strong>`
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${somar}</strong></p>`
        } else if (valores == 2){
            res.innerHTML = `<strong>Calculando...</strong>`
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${subtrair}</strong></p>`
        } else if (valores == 3){
            res.innerHTML = `<strong>Calculando...</strong>`
            res.innerHTML += `<p>${n1} * ${n2} = <strong>${multiplicar}</strong></p>`
        } else if (valores == 4){
            res.innerHTML = `<strong>Calculando...</strong>`
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${dividir}</strong></p>`
        } else {
            res.innerHTML += `<p><strong>Opção inválida!</strong></p>`
        }
}


function limpar(){
    res.innerHTML = 'Clique no botão acima para começar.'
}