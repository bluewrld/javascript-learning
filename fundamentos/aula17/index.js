function criaPessoa (nome, idade, profissao){
    return {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
}

const pessoa1 = criaPessoa('Leo', 24, 'Desenvolvedor')

console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos e sonha em ser um ${pessoa1.profissao}`)