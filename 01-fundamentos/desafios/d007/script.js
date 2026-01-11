const botao = document.getElementById('btn')
botao.addEventListener('click', clicar)

function clicar(){
    let cot = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
    let reais = window.prompt('Quantos R$ você tem na carteira?')
    let res = document.getElementById('res')

    cot = Number(cot.replace(',', '.'))
    reais = Number(reais.replace(',', '.'))

    let dol = reais / cot;

    res.innerHTML = `<strong>Com R$ ${reais.toFixed(2)} você consegue comprar US$ ${dol.toFixed(2)}</strong>`
}