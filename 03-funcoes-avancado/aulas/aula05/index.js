// Global
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('BLUEWRLD');
const funcao2 = retornaFuncao('WRLDBLUE');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());