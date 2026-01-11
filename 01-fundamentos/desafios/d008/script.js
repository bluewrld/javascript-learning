const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let preco = Number(window.prompt(`Qual é o preço de ${produto}?`).replace(',', '.'))

    let desconto = preco * 0.1

    let precoFinal = preco - desconto

    res.innerHTML = `<strong>Calculando desconto de 10% para ${produto}</strong> <br/>`
    res.innerHTML += `O preço original era ${preco.toLocaleString('pt-br', {style: 'currency' , currency: 'BRL'})}<br/>`
    res.innerHTML += `Você acaba de ganhar ${desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de desconto (-10%)<br/>`
    res.innerHTML += `No fim, você vai pagar ${precoFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no produto ${produto}`
}