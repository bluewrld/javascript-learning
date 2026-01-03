const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))


    let media = (n1 + n2) / 2;

    res.innerHTML = `Calculando a média final de <mark>${nome}.</mark>`;
    res.innerHTML += `<p>As notas obtidas foram de <mark>${n1} e ${n2}</mark>`;
    res.innerHTML += `<p>A média final é <strong><mark>${media.toFixed(1)}</mark></strong>.</p>`;
}