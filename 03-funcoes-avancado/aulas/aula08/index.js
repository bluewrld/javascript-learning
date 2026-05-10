function criaPessoa(nome, profissao, altura, peso) {
    return {
        nome, profissao,
        fala: function(assunto) {
            return `${this.nome} está falando ${assunto}.`;
        },
        altura,
        peso
    };
}

const p1 = criaPessoa('Blue', 'Desenvolvedor');
console.log(p1.fala(`que sua profissão é ${p1.profissao}`));