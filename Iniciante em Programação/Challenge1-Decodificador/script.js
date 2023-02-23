const textArea = document.querySelector(".text-area-principal");
const textAreaMensagem = document.querySelector(".text-area-menssage");

    // As "chaves" de criptografia que utilizaremos são:
    // A letra "e" é convertida para "enter"
    // A letra "i" é convertida para "imes"
    // A letra "a" é convertida para "ai"
    // A letra "o" é convertida para "ober"
    // A letra "u" é convertida para "ufat"

    function btnEncriptar()
    {
        const testoEncriptado = encriptar(textArea.value);
        textAreaMensagem.value = testoEncriptado;
        textArea.value = " ";
    }

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    function encriptar(stringEncriptada)
    {
        matrizCodigo;
        stringEncriptada = stringEncriptada.toLowerCase();

        for(i = 0; i < matrizCodigo.length; i++)
        {
            if (stringEncriptada.includes(matrizCodigo[i][0]))
            {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);    
            }
        }
        return stringEncriptada;
    }

    function btnDesencriptar()
    {
       
    }
    
    function desencriptar(stringEncriptada)
    {
        
    }