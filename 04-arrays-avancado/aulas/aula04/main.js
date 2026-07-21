// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
//               0  1   2   3  4
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// function callbackFilter(valor) {
//     return valor > 10
// };

// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// });

// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(`Os números maiores que 10 são: ${numerosFiltrados.join(', ')}`);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });
// console.log(numerosFiltrados);

// -------------------------------------------------------------------------------------- //

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra A

const pessoas = [
    { nome: 'Karine', idade: 17},
    { nome: 'Leandro', idade: 24},
    { nome: 'Dessa', idade: 23},
    { nome: 'Higgins', idade: 62},
    { nome: 'Perseu', idade: 19},
    { nome: 'Maiky', idade: 47},
    { nome: 'Oi', idade: 10},
    { nome: 'Leo', idade: 90},
    { nome: 'Julia', idade: 18},
]

const maiorNome = pessoas.filter(obj => obj.nome.length >= 5);
const maiorIdade = pessoas.filter(obj => obj.idade > 50);
const nomeA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(maiorNome);
console.log(maiorIdade);
console.log(nomeA);