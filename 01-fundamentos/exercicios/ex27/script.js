const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')


botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let resultado = 'Contagem regressiva<br>'
    
    for(let i = 10; i >= 1; i--){
        resultado += `${i} 👉 `
    }
    
    resultado += '🏁'
    
    res.innerHTML += `<p>${resultado}</p>`
}


function limpar(){
    res.innerHTML = ''
}