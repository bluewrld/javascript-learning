// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0  1   2   3  4
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);

const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
const pares = numeros.reduce((acumulador, valor) => (valor % 2 === 0 && acumulador.push(valor), acumulador), []);
const dobro = numeros.reduce((acumulador, valor) => (acumulador.push(valor * 2), acumulador), []);

console.log(soma);
console.log(pares);
console.log(dobro);


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Karine', idade: 17},
    {nome: 'Leo', idade: 24},
    {nome: 'Dessa', idade: 23},
    {nome: 'Jose', idade: 66},
    {nome: 'Tranqueira', idade: 27},
    {nome: '', idade: 1},
];

// const maisVelha = pessoas.reduce(function(acumulador, valor) {
//     if(acumulador.idade > valor.idade) return acumulador;
//     return valor;
// });
// console.log(maisVelha);

const maisVelha = pessoas.reduce((acumulador, valor) => { if (acumulador.idade > valor.idade) return acumulador; return valor; });
console.log(maisVelha);