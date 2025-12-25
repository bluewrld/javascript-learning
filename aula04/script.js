var area = window.document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    var area = window.document.getElementById('area')
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = 'Entrou!'
    area.style.background = 'slateblue'
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'slategray'
}