// Declaração de função
falaOi()
function falaOi(){
    console.log('oi');
    console.log('')
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function(){
    console.log('Sou um dado.');
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
    console.log('')
}
executaFuncao(souUmDado);


// Arrow function

const arrowFunction = () => {
    console.log('Sou uma arrow function');
    console.log('');
}
arrowFunction();

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
};

obj.falar();