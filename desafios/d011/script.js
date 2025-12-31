const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {

        res.innerHTML += `<p>O ano de ${ano} <span style="background-color: #a3ffac; color: #006400;"><strong>É BISSEXTO</strong></span>\u{2705}</p>`
    } else {

        res.innerHTML += `<p>O ano de ${ano} <span style="background-color: #ffb6b6; color: #8b0000;"><strong>NÃO É BISSEXTO</strong></span>\u{274C}</p>`
    }
}