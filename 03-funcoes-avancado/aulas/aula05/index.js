function retornaFuncao() {
    const nome = 'BLUEWRLD';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);