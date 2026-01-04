const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')


botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let resultado = 'Números pares de 1 até 10<br>'
    
    for(let i = 1; i <= 10; i++){
        if(i % 2 === 0){
            resultado += `${i} 👉 `
        }
    }
    
    resultado += '🏁'
    
    res.innerHTML += `<p>${resultado}</p>`
}


function limpar(){
    res.innerHTML = ''
}