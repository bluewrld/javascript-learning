//                -5       -4        -3        -2       -1
//                 0        1         2         3        4
const nomes = ['Karine', 'João', 'Eduardo', 'Gabriel', 'Leo'];

// push 
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);

// unshift
// nomes.splice(2, 0, 'Luiz', 'Otávio');
// console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nome.splice(0, 1);