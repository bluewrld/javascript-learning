const botao = document.getElementById('btn')
const res = document.getElementById('res')
botao.addEventListener('click', clicar)

function clicar(){
    let entrada = window.prompt('Digite uma distância em metros (m)')
    let distancia = Number(entrada.replace(',', '.'))
    let km = distancia / 1000
    let hm = distancia / 100
    let dam = distancia / 10
    let m = distancia
    let dm = distancia * 10
    let cm = distancia * 100
    let mm = distancia * 1000

    res.innerHTML = `<strong>A distância de ${distancia} metros, corresponde a..</strong><br>`
    res.innerHTML += `
    ${km.toString().replace('.', ',')} quilômetros (Km) <br>
    ${hm.toString().replace('.', ',')} hectômetros (Hm) <br>
    ${dam.toString().replace('.', ',')} decâmetros (Dam) <br>
    ${dm.toString().replace('.', ',')} decímetros (dm) <br>
    ${cm.toString().replace('.', ',')} centímetros (cm) <br>
    ${mm.toString().replace('.', ',')} milímetros (mm)
    `
}

