const pessoa = {
    nome: 'Leo',
    sobrenome: 'Mota',
    idade: 24,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade , endereco: {rua, numero}} = pessoa;

console.log(nome, sobrenome, idade, rua, numero);