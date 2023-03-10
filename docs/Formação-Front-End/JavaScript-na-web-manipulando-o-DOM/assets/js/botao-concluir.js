
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

    export default botaoConcluir