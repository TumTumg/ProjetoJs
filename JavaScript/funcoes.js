function somar(){
    var num1;//Declarando variavel
    var num2;
    var res;
    //Coletrando os dados dos campos

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o calculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos numeros é: " + res;
}//Fim do método

function subtrair(){
    var num1;//Declarando variavel
    var num2;
    var res;
    //Coletrando os dados dos campos

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o calculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos numeros é: " + res;
}//Fim do método

function multiplicar(){
    var num1;//Declarando variavel
    var num2;
    var res;
    //Coletrando os dados dos campos

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o calculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos numeros é: " + res;
}//Fim do método

function dividir(){
    var num1;//Declarando variavel
    var num2;
    var res;
    //Coletrando os dados dos campos

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o calculo
    if(num2 <= 0){
        res = "impossível dividir por números menores ou igual a zero!"
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos numeros é: " + res;
}//Fim do método


function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + "*" + i + "=" + (num1 * i);
        resNum2 += "\n" + num2 + "*" + i + "=" + (num2 * i);
    }

    document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + resNum2;

}//Fim do método

//Faça uma para calcular a potência
function potencia(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Potência do " + num1 + " Elevado à:" + num2 + "º Potência" + resNum1;
    
    var resNum1 = Math.pow ( num1,num2);

    document.getElementById("resultado").value = "\n" + "Potência do " + num1 + " Elevado à " + num2 + "º Potência:  " + resNum1;
}
//Faça uma função para calcular a raiz dos dois números

function raiz(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = Math.sqrt (num1)
    var resNum2 = Math.sqrt (num2)

    document.getElementById("resultado").value = "\n" + "Raíz do primeiro número: " + resNum1 + "\n\n" + "Raíz do segundo número: " + resNum2;
}


//Faça uma função para calcular a formula de bhaskara

function bhaskara(){
    var num1;
    var num2;
    var num3;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    num3 = parseInt(document.getElementById("ttNum").value);

    var delta = (num2 * num2) - 4 * num1 * num3;
    
    document.getElementById("resultado").value = "Valor de Delta => " + delta ;
    if(delta < 0){
        document.getElementById("resultado").value = "Para Delta negativo, não existem raízes reais.";  
    }else{


        document.getElementById("resultado").value="Para Delta positivo, raízes diferentes:";  

        resNum1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
		resnum2 = (-num2 - Math.sqrt(delta)) / (2 * num1);

        document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + resNum2;
    }
}