const botao = document.getElementById('btn')
const clear = document.getElementById('clearbtn')
const res = document.getElementById('res')


botao.addEventListener('click', iniciar)
clear.addEventListener('click', limpar)

function iniciar(){
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
    
    if(mes === null){
        return
    }
    
    mes = mes.toLowerCase().trim()
    let estacao = ''
    
    // Verão: dezembro, janeiro, fevereiro
    // Outono: março, abril, maio
    // Inverno: junho, julho, agosto
    // Primavera: setembro, outubro, novembro
    
    if(mes === 'dezembro' || mes === 'janeiro' || mes === 'fevereiro'){
        estacao = 'VERÃO'
    } else if(mes === 'março' || mes === 'abril' || mes === 'maio'){
        estacao = 'OUTONO'
    } else if(mes === 'junho' || mes === 'julho' || mes === 'agosto'){
        estacao = 'INVERNO'
    } else if(mes === 'setembro' || mes === 'outubro' || mes === 'novembro'){
        estacao = 'PRIMAVERA'
    } else {
        res.innerHTML += `<p style="color: red;"><strong>Erro!</strong> Digite um mês válido!</p>`
        return
    }
    
    res.innerHTML += `<p>No mês de <strong>${mes.charAt(0).toUpperCase() + mes.slice(1)}</strong>, estamos na estação <strong style="color: blue;">${estacao}</strong>.</p>`
}


function limpar(){
    res.innerHTML = ''
}