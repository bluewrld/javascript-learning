const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome} ?`).replace(',', '.'))
    let reajuste = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let aumento = salario * (reajuste / 100)
    let reajusteFinal = aumento + salario


    res.innerHTML = `<strong>${nome} recebeu um aumento salarial!</strong> <br/>`
    res.innerHTML += `O salário atual era ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br/>`
    res.innerHTML += `Com um aumento de ${reajuste}%, o salário vai aumentar ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês. <br/>`
    res.innerHTML += `E a partir daí, ${nome} vai passar a ganhar ${reajusteFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
}