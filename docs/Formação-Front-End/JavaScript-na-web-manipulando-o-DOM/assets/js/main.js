   // import botaoConcluir from './botao-concluir';
   // import botaoExcluir from './botao-excluir';
function program ()
{
    const task = document.querySelector('[data-form-button]');
    const input = document.querySelector('[data-form-input]');
    const valueInput = input.value;

    function createTask(event) 
    {
        event.preventDefault();
        const valueInput = input.value;
            
        
        criarParagrafo(valueInput)

        input.value = " ";
    }

    function criarParagrafo(valueInput)
    {
        const lista = document.querySelector('[data-form-ul]');
        const novaTarefa = document.createElement('li'); //cria um novo elemento html.
        novaTarefa.classList.add('task');
        const conteudo = `<p class="content">${valueInput}</p>`; //cria um elemento pradonizado que sempre vai receber o valor do input
        lista.appendChild(novaTarefa);  //adiciona o elemento filho <li> dentro do elemento pai <ul>
        novaTarefa.innerHTML = conteudo;  

        novaTarefa.appendChild(botaoConcluir());
        novaTarefa.appendChild(botaoExcluir());
    }

    
function botaoConcluir ()
    {
        const botaoConclui = document.createElement('button');

        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'concluir'

        botaoConclui.addEventListener('click', tarefaConluida);

        return botaoConclui;
    }

    function tarefaConluida(evento) 
    {
        const botaoConclui = evento.target;
        const tarefaCompleta = botaoConclui.parentElement; //seleciona o elemento pai do elemento <button>

        tarefaCompleta.classList.toggle('done');

    }

    
function botaoExcluir() 
{
    const botaoExclusao = document.createElement('button');

    botaoExclusao.classList.add('delete-button');
    botaoExclusao.innerText = 'deletar';

    botaoExclusao.addEventListener('click', tarefaExcluida);

    return botaoExclusao;
}

function tarefaExcluida(evento) 
{

    const botaoExclui = evento.target;
    const elementoLi = botaoExclui.parentElement; //seleciona o elemento pai do elemento <button>
    
    elementoLi.remove();

    return botaoExclui;
    
}

    task.addEventListener('click', createTask);
}
program ()