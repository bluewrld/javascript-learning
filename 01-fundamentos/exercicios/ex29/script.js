const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')
const inicio = document.getElementById('inicio')
const fim = document.getElementById('fim')

botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let valorInicio = Number(inicio.value)
    let valorFim = Number(fim.value)
    
    if(isNaN(valorInicio) || isNaN(valorFim)){
        res.innerHTML = '<p style="color: red;"><strong>Erro!</strong> Digite números válidos em ambos os campos!</p>'
        return
    }
    
    let resultado = `Contando de ${valorInicio} até ${valorFim}<br>`
    
    if(valorInicio <= valorFim){
        for(let i = valorInicio; i <= valorFim; i++){
            resultado += `${i} 👉 `
        }
    } else {
        for(let i = valorInicio; i >= valorFim; i--){
            resultado += `${i} 👉 `
        }
    }
    
    resultado += '🏁'
    
    res.innerHTML += `<p>${resultado}</p>`
}

function limpar(){
    res.innerHTML = '<p>Preencha os dados acima e aperte o botão.</p>'
    inicio.value = ''
    fim.value = ''
}