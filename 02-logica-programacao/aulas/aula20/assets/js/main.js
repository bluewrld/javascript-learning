const inputTarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('btn-tarefa')) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    if (el.classList.contains('btn-apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }

    if (el.classList.contains('btn-editar')) {
        if (document.querySelector('.input-editar')) return;
        
        const li = el.parentElement;
        const tarefaTexto = li.innerText.replace('Apagar', '').replace('Editar', '').trim();
        const tarefaAnterior = tarefaTexto;
        
        const inputEditar = document.createElement('input');
        inputEditar.type = 'text';
        inputEditar.value = tarefaTexto;
        inputEditar.className = 'input-editar';
        
        li.innerText = '';
        li.appendChild(inputEditar);
        
        // BOTAO SALVAR
        const botaoSalvar = document.createElement('button');
        botaoSalvar.innerText = 'Salvar';
        botaoSalvar.setAttribute('class', 'btn-salvar');
        botaoSalvar.setAttribute('title', 'Salvar alterações');
        li.appendChild(botaoSalvar);

        // BOTAO CANCELAR
        const botaoCancelar = document.createElement('button');
        botaoCancelar.innerText = 'Cancelar';
        botaoCancelar.setAttribute('class', 'btn-cancelar');
        botaoCancelar.setAttribute('title', 'Cancelar edição');
        li.appendChild(botaoCancelar);
        
        inputEditar.focus();
        
        function salvarEdicao() {
            const novoTexto = inputEditar.value.trim();
            if (!novoTexto) {
                li.remove();
            } else {
                li.innerText = novoTexto;
                criaBotaoApagar(li);
            }
            salvarTarefas();
        }

        function cancelarEdicao() {
            li.innerText = tarefaAnterior;
            criaBotaoApagar(li);
        }
        
        botaoSalvar.addEventListener('click', salvarEdicao);
        botaoCancelar.addEventListener('click', cancelarEdicao);
        
        inputEditar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                salvarEdicao();
            }
            if (e.key === 'Escape') {
                cancelarEdicao();
            }
        });
    }
});

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        inputTarefa.value = '';
        inputTarefa.focus();
    }
});

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    const botaoEditar = document.createElement('button');

    // BOTAO APAGAR TAREFA
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'btn-apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);

    // BOTAO EDITAR TAREFA
    botaoEditar.innerText = 'Editar';
    botaoEditar.setAttribute('class', 'btn-editar');
    botaoEditar.setAttribute('title', 'Editar esta tarefa');
    li.appendChild(botaoEditar)
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li)
    salvarTarefas();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').replace('Editar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();