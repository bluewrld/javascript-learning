const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')
const numero = document.getElementById('inicio')

botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let valor = Number(numero.value)
    
    if(isNaN(valor) || valor < 1 || valor > 21){
        res.innerHTML = '<p style="color: red;"><strong>Erro!</strong> Digite um número entre 1 e 21!</p>'
        return
    }
    
    let resultado = `Calculando <strong>${valor}</strong>!<br>`
    let fatorial = 1
    
    for(let i = valor; i > 1; i--){
        resultado += `${valor} x ${i - 1} = `
        fatorial *= i
        valor = i - 1
    }
    
    resultado += `<strong>${fatorial}</strong><br>`
    
    res.innerHTML += `<p>${resultado}</p>`
}

function limpar(){
    res.innerHTML = '<p>Preencha os dados acima e aperte o botão.</p>'
    numero.value = ''
}