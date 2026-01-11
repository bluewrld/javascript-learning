const pessoa1 = {
    nome: 'Leo',
    idade: 24,
    profissao: 'Desenvolvedor',

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()