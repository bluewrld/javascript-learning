const botao = document.getElementById('btn')
const res = document.getElementById('res')

botao.addEventListener('click', clicar)

function clicar(){
    let agora = new Date()
    
    let dia = agora.getDate()
    let mes = agora.toLocaleString('pt-BR', {month: 'short'})
    let ano = agora.getFullYear()
    let diaSemana = agora.toLocaleString('pt-BR', {weekday: 'short'})
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${diaSemana}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`
}