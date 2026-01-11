let valores = [8, 9 , 2 , 4, 7, 5 , 1]
valores.sort()
console.log(valores)

/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}!`)
}