/*
Operadores Lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -_ OU -> 
! -> NOT -> NÃO -> Uma negação inverte, duas negação retorna pro valor original

*/

const expressaoAnd = true && true && false && true
const expressaoOr = true || false || true || false
const expressaoNot = !true
console.log(expressaoAnd)
console.log(expressaoOr)
console.log(expressaoNot)