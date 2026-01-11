const botao1 = document.getElementById('btn1')
const botao2 = document.getElementById('btn2')
const botao3 = document.getElementById('btn3')
const botao4 = document.getElementById('btn4')
const res = document.getElementById('res')


botao1.addEventListener('click', function() {
    res.innerHTML += '<p>Clicou no primeiro botão</p>'
})

botao2.addEventListener('click', function() {
    res.innerHTML += '<p>Clicou no segundo botão</p>'
})

botao3.addEventListener('click', function() {
    res.innerHTML += '<p>Clicou no terceiro botão</p>'
})

botao4.addEventListener('click', function() {
    res.innerHTML += '<p>Clicou no quarto botão</p>'
})