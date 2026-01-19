const verdadeira = true

// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

let nome = 'Leo'
var nome2 = 'Mota'


if (verdadeira) {
    let nome = 'Blue' // criando
    console.log(nome, nome2)

    if (verdadeira) {
        var nome2 = 'Leandro'
        let nome = 'Outra coisa'
        console.log(nome, nome2)
    }
}

