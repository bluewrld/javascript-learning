const relogio = document.querySelector('.relogio');
const btn = document.querySelector('#button');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();

        btnIniciar.classList.add('iniciado');

        btnPausar.classList.add('pausar-ativo');
        btnPausar.classList.remove('pausado-btn');

        btnZerar.classList.add('zerar-ativo');
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');

        btnPausar.classList.remove('pausar-ativo');
        btnPausar.classList.add('pausado-btn');

        btnIniciar.classList.add('iniciado');

        btnZerar.classList.add('zerar-ativo');
    }

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;

        btnIniciar.classList.remove('iniciado');

        btnPausar.classList.remove('pausar-ativo');
        btnPausar.classList.remove('pausado-btn');

        btnZerar.classList.remove('zerar-ativo');
    }
});