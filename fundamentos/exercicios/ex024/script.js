const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')


botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let resultado = 'Contando de 1 até 10<br>'
    
    for(let i = 1; i <= 10; i++){
        resultado += `${i} 👉 `
    }
    
    resultado += '🏁'
    
    res.innerHTML += `<p>${resultado}</p>`
}


function limpar(){
    res.innerHTML = ''
}