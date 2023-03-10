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
        validators[typeInput](input);    
    }
    
    if (input.validity.valid)
    {
        input.parentElement.classList.remove('input-container--invalido');  
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';  
    } else
    {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = pegaMensagemDeErro(inputType, input);  
    }

    const errorType = 
    [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'customError'
    ]

    const errorMessage = 
    {
        name:
        {
            valueMissing: 'O campo dnamenão pode estar vazio.'
        },
        email:
        {
            valueMissing: 'O campo  de email não pode estar vazio.',
            typeMismatch: 'O email digitado não é valido.'
        },
        password:
        {
            valueMissing: 'O campo de senha não pode estar vazio.',
            patternMismatch: 'A senha deverá ter entre 6 e 12 dígitos, deverá ter ao menos uma letra maiúscula, uma minúscula, um número e não poderá ter nenhum caracter especial.'
        },
        dateBirth:
        {
            valueMissing: 'O campo de data de nascimento não pode estar vazio.',
            customError: 'Você deve ser maior que 18 anos para se cadastrar.'
        },
    }
}

const validators = 
{   
    dateBirth:input => validateDateBirth(input)
}

function pegaMensagemDeErro(inputType, input)
{
    let mesenger = '';

    errorType.forEach(erro => 
        {
            if(input.validity[erro])
            {
                mensagem = errorMessage[inputType][erro];
            }
        })
    return mesenger;
}

//-----------------------------------------------------------------------------------
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


