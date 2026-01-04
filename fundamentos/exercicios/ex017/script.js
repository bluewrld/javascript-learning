const botao = document.getElementById('btn')
const res = document.getElementById('res')

botao.addEventListener('click', clicar)

function clicar(){
    let agora = new Date()
    res.innerHTML = `O que eu recebi do sistema foi <mark>${agora.toString()}</mark>`
}