// argumentos que sustenta todos os argumentos enviados
// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['BlueWRLD', 'Desenvolvedor', '24']);


// function conta(operador, acumulador, ...numeros) {
//     for(let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//         console.log(acumulador);
//     }
// }
// conta('-', 200, 20, 30, 40, 50);

const conta = (...args) => {
    console.log(args)
};
conta('+', 1, 20, 30, 40, 50);