
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

    export default botaoExcluir;