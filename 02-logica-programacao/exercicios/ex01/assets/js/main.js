// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (<strong>${nivelImc}</strong>)`;
    
    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    
    return nivel[0];
}

function getImc(peso, altura){
    // Se altura >= 10, assume que foi digitado em cm (ex: 170) e converte para metros
    if (altura >= 10) {
        altura = altura / 100;
    }
    
    const imc = peso / altura ** 2;
    return parseFloat(imc.toFixed(2));
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const res = document.getElementById('res');
    res.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    res.appendChild(p);
}