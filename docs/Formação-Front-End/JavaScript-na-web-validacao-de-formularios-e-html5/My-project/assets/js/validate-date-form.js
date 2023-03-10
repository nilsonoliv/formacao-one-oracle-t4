const inputs = document.querySelectorAll('input');

inputs.forEach(input => 
    {
        input.addEventListener('blur', (evento) => 
        {
            validaInput(evento.target);
        })
    })

function validaInput(input) // funçao vai validar todos os inputs   
{
    const typeInput = input.dataset.tipo;    
    if (validators[typeInput]) 
    {
        validators[typeInput](input)    
    }
}

const validators = 
{
    dateBirth:input => validateDateBirth(input)
}

function validateDateBirth(input) //faz a validação do input data, se o usuario é ou não maior que 18 anos
{
    const receivedDate = new Date(input.value);
    let mesenger = "";

    if(!biggerThen18(receivedDate))
    {
        mesenger = "Você tem que ser maior de 18 anos!";//determina a mensagem de erro de acordo com a data
    }
    input.setCustomValidity(mesenger);// executa uma mensagem de erro customizada
}

function biggerThen18(date) //Faz a comparação entre a data atual com a data informada pelo usuário
{
    const dateNow = new Date();
    const dateBiggerThen18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(),date.getUTCDate());
    return dateBiggerThen18 <= dateNow;
}

function validateName(input)
{
    if (input.validity.valid)
    {
        input.parentElement.classList.remove('input-container--invalido');    
    } else
    {
        input.parentElement.classList.add('input-container--invalido');
    }
}
