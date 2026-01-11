const botao = document.getElementById('btn')
const res = document.getElementById('res')

botao.addEventListener('click', clicar)

function clicar(){
    let ano = Number(window.prompt('Em que ano você nasceu?'))
    let agora = new Date()
    let calc = agora.getFullYear() - ano

    res.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${calc}</strong> anos em ${agora.getFullYear()}`
}