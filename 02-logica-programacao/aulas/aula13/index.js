// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Blue',
    idade: 24,
    profissao: 'Desenvolvedor',
};

for (let chave in pessoa) {
    console.log(chave + ':', pessoa[chave])
}

// for (let i in frutas) {
//     console.log(frutas[i])
// }


// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }