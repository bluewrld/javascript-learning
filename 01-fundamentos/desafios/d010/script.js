const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))

    let delta = (b * b) - (4 * a * c)

    res.innerHTML = ''

    res.innerHTML += `<h2>Resolvendo a equação: ${a}x² + ${b}x + ${c} = 0</h2>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>Δ = ${delta}</strong></mark></p>`

    if (a === 0) {
        res.innerHTML += `<p><strong>Atenção:</strong> Se "a" for 0, não é uma equação de segundo grau!</p>`
    } 
    else if (delta < 0) {
        res.innerHTML += `<p>Como o Delta é negativo, <strong>não existem raízes reais</strong>.</p>`
    } 
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)

        res.innerHTML += `<hr>`
        res.innerHTML += `<p>Calculando as raízes com a fórmula: x = (-b ± √Δ) / 2a</p>`
        res.innerHTML += `<p>O valor de x' é <strong>${x1.toFixed(2)}</strong></p>`
        res.innerHTML += `<p>O valor de x'' é <strong>${x2.toFixed(2)}</strong></p>`
    }
}
