const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let n1 = Number(window.prompt('Digite um número:'))

    res.innerHTML = `O número a ser analisado aqui será o <strong>${n1}</strong><hr>`
    res.innerHTML += `<p>O seu valor absoluto é <strong>${Math.abs(n1)}</strong></p>`
    res.innerHTML += `<p>A sua parte inteira é <strong>${Math.trunc(n1)}</strong></p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é <strong>${Math.round(n1)}</strong></p>`
    res.innerHTML += `<p>A sua raiz quadrada é <strong>${Math.sqrt(n1)}</strong></p>`
    res.innerHTML += `<p>A sua raiz cúbica é <strong>${Math.cbrt(n1)}</strong></p>`
    res.innerHTML += `<p>O valor de 2<sup>${n1}</sup> é <strong>${Math.pow(2, n1)}</strong></p>`
    res.innerHTML += `<p>O valor de 2<sup>${n1 + 1}</sup> é <strong>${Math.pow(2, n1 + 1)}</strong></p>`
}