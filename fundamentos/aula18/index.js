function criaPessoa (nome, idade, profissao){
    return {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
}

const pessoa1 = criaPessoa('leo', 24, 'Desenvolvedor')

console.log(pessoa1.nome)