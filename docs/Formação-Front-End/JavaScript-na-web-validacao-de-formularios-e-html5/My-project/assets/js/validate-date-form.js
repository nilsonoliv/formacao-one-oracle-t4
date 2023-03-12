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
    const inputType = input.dataset.tipo;    
    if (validators[inputType]) 
    {
        validators[inputType](input);    
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
            valueMissing: 'O campo de nome não pode estar vazio.'
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
        cpf:
        {
            valueMissing: 'O campo de CPF não pode estar vazio',
            customError: 'O cpf digitado não é válido'
        },
        cep:
        {
            valueMissing: 'O campo de CEP não pode estar vazio',
            patternMismatch: 'O CEP digitado não é válido',
            customError: 'Não foi possível buscar este CEP.'
        },
        logradouro:
        {
            valueMissing: 'O campo de logradouro não pode estar vazio',
        },
        city:
        {
            valueMissing: 'O campo de cidade não pode estar vazio',
        },
        state:
        {
            valueMissing: 'O campo de estado não pode estar vazio',
        }
    }

const validators = 
{   
    dateBirth:input => validateDateBirth(input),
    cpf:input => validateCPF(input),
    cep:input => recoverCep(input)
};

function pegaMensagemDeErro(inputType, input)
{
    let mesenger = '';

    errorType.forEach(erro => 
        {
            if(input.validity[erro])
            {
                mesenger = errorMessage[inputType][erro];
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

function validateCPF(input) 
{
    const formattedCPF = input.value.replace(/\D/g, '');

    let mesenger = "";

    if (!checkCpfRepeatedNumbers(formattedCPF) || !checkCpfStructure(formattedCPF)) 
    {
        mesenger = "O cpf digitado não é válido";    
    }

    input.setCustomValidity(mesenger);
}

function checkCpfRepeatedNumbers(cpf) 
{
    const repeatedValues = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];
    let validCPF = true;

    repeatedValues.forEach(value => 
        {
            if(value == cpf)
            {
                validCPF = false;
            }
        })

    return validCPF;    
}

function checkCpfStructure(cpf) 
{
    const multiplier = 10;
    return checkVerifyingDigit(cpf, multiplier)
}

function confirmDigit(sum) 
{
    return 11 - (sum % 11);
}

function checkVerifyingDigit(cpf, multiplier)
{
    if (multiplier >= 12) 
    {
        return true;    
    }

    let multiplierInit = multiplier;
    let sum = 0;
    const CpfWithoutDigits = cpf.substr(0, multiplier - 1).split('');
    const verifyingDigit = cpf.charAt(multiplier - 1);

    for(let i = 0; multiplierInit > 1; multiplierInit--)
    {
        sum = sum + CpfWithoutDigits[i] * multiplierInit;
        i++;
    }

    if (verifyingDigit == confirmDigit(sum)) 
    {
        return checkVerifyingDigit(cpf, multiplier + 1);    
    }

    return false;
}

function recoverCep(input) 
{
    const cep = input.value.replace(/\D/g, '');
    const urlApi = `http://viacep.com.br/ws/${cep}/json/`;
    const options = 
    {
        method: 'GET',
        mode:'cors',
        headers:
        {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if (!input.validity.patternMismatch && !input.validity.valueMissing) 
    {
        fetch(urlApi,options).then
        (
            response => response.json()
        ).then
            ( 
                data => 
                {
                    console.log(data);
                    if (data.erro) 
                    {
                        input.setCustomValidity('Insira um CEP válido!');
                        return
                    }
                    input.setCustomValidity('');
                    fillCepForm(data);
                    return;
                }
            )
    }


}

function fillCepForm(data) 
{
    const logradouro = document.querySelector('[data-tipo="logradouro"]');    
    const city = document.querySelector('[data-tipo="city"]');    
    const state = document.querySelector('[data-tipo="state"]');    
    
    logradouro.value = data.logradouro;
    city.value = data.localidade;
    state.value = data.uf;
}