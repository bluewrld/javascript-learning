const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let produto = window.prompt('Qual produto você está comprando?')

    let valor = Number(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    let dinheiro = Number(window.prompt(`Qual foi o valor que você deu apra pagar o ${produto}?`))

    let calc = dinheiro - valor

    let valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let dinheiroFormatado = dinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let trocoFormatado = calc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    res.innerHTML = `Você comprou <strong>${produto}</strong> que custou <strong>${valorFormatado}</strong>. <br> 
    Deu <strong>${dinheiroFormatado}</strong> em dinheiro <br>
    e vai receber <strong>${trocoFormatado}</strong> de troco. <br>
    Volte Sempre!`
}