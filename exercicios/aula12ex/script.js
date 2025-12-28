function carregar(){
    var msg = document.getElementById('msg')
    var image = document.getElementById('img')
    var data = new Date()
    var hora =  data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        image.src = 'media/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        image.src = 'media/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
         // Boa noite
        image.src = 'media/noite.jpg'
        document.body.style.background = '#515154'
    }
}