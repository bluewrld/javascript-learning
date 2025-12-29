const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let entrada = Number(window.prompt('Digite uma temperatura em ºC (Celsius)').replace(',', '.'))

    // calculo
    let kelvin = entrada + 273.15
    let fahrenheit = (entrada * 1.8) + 32

    res.innerHTML = `<strong>A temperatura de ${entrada.toString().replace('.', ',')}ºC , corresponde a..</strong><br>`
    res.innerHTML += `${kelvin.toFixed(2)}ºK (Kelvin) <br>
    ${fahrenheit.toFixed(2)}ºF (Fahrenheit)`
}