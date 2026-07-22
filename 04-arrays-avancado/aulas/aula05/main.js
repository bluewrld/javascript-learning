// Dobre os números
//               0  1   2   3  4
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

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
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const comIds = pessoas.map((obj, indice) => (obj.id = indice, obj));


console.log(comIds);
console.log(nomes, idades);