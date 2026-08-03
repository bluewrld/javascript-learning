// const pessoa1 = new Object();
// pessoa1.nome = 'Lua';
// pessoa1.sobrenome = 'Sol';
// pessoa1.idade = 10;

// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };

// pessoa1.getDataNasc = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//     console.log(chave);
// };



// Factory functions 
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Sol', 'Lua')
// console.log(p1.nomeCompleto);



// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} -< this -> this
const p1 = new Pessoa('Blue', 'WRLD');
Object.freeze(p1); // Faz com que o objeto não seja alterado, o objeto não pode ser alterado
p1.nome = 'Outra Coisa'
const p2 = new Pessoa('Lua', 'Sol');
console.log(p1);
console.log(p2);