const botao = document.getElementById('btn')
const res = document.getElementById('res')

botao.addEventListener('click', clicar)

function clicar(){
    let preco = Number(window.prompt('Qual era o preço anterior do produto?').replace(',','.'))
    let precoAtual = Number(window.prompt('Qual é o preço atual do produto?').replace(',', '.'))


    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`


    if (precoAtual > preco) {

        let diferenca = precoAtual - preco
        let porcentagem = (diferenca / preco) * 100

        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu <span style="background-color: #ffb6b6; color: #8b0000; padding: 0 5px;"><strong>${diferenca.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong></span> em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de <span style="background-color: #ffb6b6; color: #8b0000; padding: 0 5px;"><strong>${porcentagem.toFixed(2)}%</strong></span> pra cima. \u{1F4C8}</p>`
    
    } else {
        let diferenca = preco - precoAtual
        let porcentagem = (diferenca / preco) * 100

        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu <span style="background-color: #a3ffac; color: #006400; padding: 0 5px;"><strong>${diferenca.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong></span> em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de <span style="background-color: #a3ffac; color: #006400; padding: 0 5px;"><strong>${porcentagem.toFixed(2)}%</strong></span> pra baixo. \u{1F4C9}</p>`
    }
}