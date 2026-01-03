const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')
const numero = document.getElementById('numero')

botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let valor = Number(numero.value)
    
    if(isNaN(valor) || valor < 1){
        res.innerHTML = '<p style="color: red;"><strong>Erro!</strong> Digite um número positivo válido!</p>'
        return
    }
    
    let resultado = `Contando de 0 até ${valor}<br>`
    
    for(let i = 0; i <= valor; i++){
        resultado += `${i} 👉 `
    }
    
    resultado += '🏁'
    
    res.innerHTML += `<p>${resultado}</p>`
}

function limpar(){
    res.innerHTML = '<p>Preencha os dados acima e aperte o botão.</p>'
    numero.value = ''
}