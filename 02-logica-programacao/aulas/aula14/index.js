const pessoa = {
    nome: 'Blue',
    idade: 24,
    profissao: 'Desenvolvedor',
}

for (let chave in pessoa){
    console.log(chave + ':', pessoa[chave])
}

// # For clássico - Geralmente com iteráveis (array ou strings)
// # For in - Retorna o índice ou chave (string, array ou objetos)
// # For of - Retorna o valor em si (iteráveis, arrays ou strings)



// const nomes = ['Blue WRLD', 'Blue', 'Bluezinho']

// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i])
// }

// console.log('');

// for (let i in nomes) {
//     console.log(nomes[i])
// }

// console.log('');

// for (let valor of nomes) {
//     console.log(valor)
// }

// console.log('');

// nomes.forEach(function(v, i, a) {
//     console.log(v, i, a);
// });