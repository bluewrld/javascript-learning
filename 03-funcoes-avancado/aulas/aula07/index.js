// IIFE -> Immediately invoked function expression
(function(idade, profissao) {
    const sobreNome = 'WRLD';
    function criaNome(nome) {
        return nome + ' ' + sobreNome;
    }

    function falaNome() {
        console.log(criaNome('BLUE'));
    }

    falaNome();
    console.log(idade, profissao)
})(24, 'desenvolvedor'); // PARAMETROS

const nome = 'Qualquer coisa';
