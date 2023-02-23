function botao() {  
    document.getElementById("agradecer").innerHTML = "Click aqui agora!"; //"getElementyById --> seta um elemento html e executa uma ação
    document.getElementById("paragrafo").outerHTML = "";
    //alert("Obrigado por clicar :)");
}

function redirecionar() {
    window.open("https://www.dio.me/"); //abri em outra página
   // window.location.href = "https://www.dio.me/"; //abri na mesma página
}

function passarmouse(elemento) {
    //alert("Trocar texto")
    //document.getElementById("mouse").innerHTML = "Muito bem! Você passou o mouse."; // O elemento HTML onmouseover executa uma ação quando o mouse é passado em algo
    elemento.innerHTML = "Muito bem! Você passou o mouse.";
}

function back(elemento) {
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse!!.";
    elemento.innerHTML = "Obrigado por passar o mouse!!.";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*function soma(n1, n2) {        //apresentando as funções
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5,10));

function validaridade(idade) {
    var validar;
    if(idade < 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
alert(validaridade(idade));

/*
var d = new Date(); // adicionando datas 
alert("mês " + (d.getMonth()+1));
alert("minutos: " + d.getMinutes());
alert("horas: " + d.getHours());
alert("data: " + d.getDate());



/*
for(var i = 5; i <= 5; i = i - 1) {
    alert(i);
}

/*var count = 0

while(count <= 5) {
    console.log(count);
    alert(count);
    count ++;
}

/*function mmm(lista) {
    alert(lista);
}
mmm(["carro", "casa", "paralelepipedo"])*/

/*var idade = prompt("Qual a sua idade?") //pronpt adiciona uma caixa de texto onde o usuário pode adicionar um valor ou uma string
if(idade <= 17) {
    alert("menor de idade")
}else {
    alert("maior de idade")
}*/