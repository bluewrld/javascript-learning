function meuEscopo () {
    const res = document.getElementById('res')
    const form = document.querySelector('.form')

    const pessoas = []

    function recebeEventoForm (e) {
        e.preventDefault()

        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        res.innerHTML += `<p>${nome.value} ${sobrenome.value}</p>`
        res.innerHTML += `<p>Peso: ${peso.value}KG</p>`
        res.innerHTML += `<p>Altura: ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)

    
}

meuEscopo()
