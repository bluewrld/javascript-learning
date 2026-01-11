const botao = document.getElementById('btn')
const res = document.getElementById('res')

botao.addEventListener('click', clicar)

function clicar() {

    let nome = window.prompt('Qual é o nome do aluno?')

    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`).replace(',', '.'))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`).replace(',', '.'))


    let media = (n1 + n2) / 2

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media.toFixed(1)}</strong></p>`

    
    if (media >= 6) {
        res.innerHTML += `<p>Com média acima de 6.0, o aluno está <span style="background-color: #a3ffac; color: #006400; padding: 2px 5px; border-radius: 3px;"><strong>APROVADO</strong></span> \u{1F929}</p>`
    
    } else if (media >= 3) {
        res.innerHTML += `<p>Com média entre 3.0 e 6.0, o aluno está em <span style="background-color: #fff8b6; color: #9da606; padding: 2px 5px; border-radius: 3px;"><strong>RECUPERAÇÃO</strong></span> \u{1F61F}</p>`
    
    } else {
        res.innerHTML += `<p>Com média abaixo de 3.0, o aluno está <span style="background-color: #ffb6b6; color: #8b0000; padding: 2px 5px; border-radius: 3px;"><strong>REPROVADO</strong></span> \u{1F62D}</p>`
    }
}