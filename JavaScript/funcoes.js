function somar(){
    var num1;//Declarando variavel
    var num2;
    var res;
    //Coletrando os dados dos campos

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o calculo
    res = num1 + num2;
    document.getElementById("resultado").value = "A soma dos numeros é: " + res;
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
    document.getElementById("resultado").value = "A subtração dos numeros é: " + res;
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
    document.getElementById("resultado").value = "A multiplicação dos numeros é: " + res;
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
    document.getElementById("resultado").value = "A divisão dos numeros é: " + res;
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

function bhaskara() {
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;

    var a = parseInt(document.getElementById("tpNum").value);
    var b = parseInt(document.getElementById("tsNum").value);
    var c = parseInt(document.getElementById("ttNum").value);

    //1º calcula delta
    delta = Math.pow(b,2) - 4 * a * c;
    //2º parte: Calcular x1 e x2 se delta não for negativo
    if(delta >= 0){
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
    }else{
        x1 = "Impossivel calcular x1, pois o delta é negativo";
        x2 = "Impossivel calcular x2, pois o delta é negativo";

        //Mostrar em tela
    }//Fim do método
    document.getElementById("resultado").value = "\nDelta: " + delta + "\n\nX1: " + x1 + "\nX2: " + x2;  
}

function parImpar(){
    var num1 = parseInt(document.getElementById("tpNum").value);
    var num2 = parseInt(document.getElementById("tsNum").value);

    if(num1 % 2 == 0 && num2 % 2 == 0){
        document.getElementById("resultado").value = "Ambos os números são pares" ;
    } else if (num1 % 2 != 0 && num2 % 2 != 0) {
        document.getElementById("resultado").value = "Ambos os números são ímpares" ;
    } else if (num1 % 2 == 0 && num2 % 2 != 0) {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " ,é par." + " E o segundo: " + num2 + " ,é ímpar" ;
    } else {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " ,é impar." + " E o segundo: " + num2 + " ,é par" ;
    }
}

function verificarPositivoNegativo() {
    var num1 = parseInt(document.getElementById("tpNum").value);
    var num2 = parseInt(document.getElementById("tsNum").value);

    if (num1 > 0 && num2 > 0) {
        document.getElementById("resultado").value = "Ambos os números são positivos" ;
    } else if (num1 < 0 && num2 < 0) {
        document.getElementById("resultado").value = "Ambos os números são negativos" ;
    } else if (num1 > 0 && num2 < 0) {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " é positivo e o segundo: " + num2 + " é negativo" ;
    } else if (num1 < 0 && num2 > 0) {
        document.getElementById("resultado").value = "O primeiro número: " + num1 + " é negativo e o segundo: " + num2 + " é positivo" ;
    } else if (num1 == 0 && num2 == 0) {
        document.getElementById("resultado").value = "Ambos os números são zero" ;
    } else if (num1 == 0 && num2 != 0) {
        document.getElementById("resultado").value = "O primeiro número é zero e o segundo é diferente de zero" ;
    } else {
        document.getElementById("resultado").value = "O primeiro número é diferente de zero e o segundo é zero" ;
    }
}


function ateDez() {
    var resultado = document.getElementById("resultado");
    resultado.value = ""; // Limpa o conteúdo anterior

    for (var i = 1; i <= 10; i++) {
        resultado.value += i + "\n"; // Adiciona cada número de 1 a 10 ao resultado
    }
}

function numerosPares() {
    var resultado = document.getElementById("resultado");
    resultado.value = ""; // Limpa o conteúdo anterior

    for (var i = 2; i <= 20; i += 2) {
        resultado.value += i + "\n"; // Adiciona cada número par de 1 a 20 ao resultado
    }
}

function umAoCem() {
    var soma = 0;
    for (var numero = 1; numero <= 100; numero++) {
        soma += numero;
    }
    document.getElementById("resultado").value = "A soma dos números de 1 a 100 é: " + soma;
}


function multiplo5() {
    var resultado = document.getElementById("resultado"); // Elemento onde os resultados serão exibidos
    resultado.value = ""; // Limpa o conteúdo anterior
    
    var multiplos = ""; // Variável para armazenar os múltiplos de 5
    
    // Loop para encontrar e armazenar os múltiplos de 5
    for (var numero = 5; numero <= 50; numero += 5) {
        multiplos += numero + ", "; // Adiciona o número à lista de múltiplos
    }
    
    // Exibição dos múltiplos de 5
    resultado.value = multiplos === "" ? "Não há múltiplos de 5 de 1 a 50." : "Os múltiplos de 5 de 1 a 50 são: " + multiplos.slice(0, -2); // Exibe os múltiplos sem a última vírgula e espaço ou mensagem de ausência de múltiplos
}

function indoAte(){
    var num1; // Declarando variável para armazenar o número fornecido pelo usuário
    var res = ""; // Inicializando a variável para armazenar os resultados

    num1 = parseInt(document.getElementById("tpNum").value);

    // Verificando se o número fornecido é válido (maior que zero)
    if (num1 > 0) {
    // Loop para imprimir os números de 1 até o número fornecido pelo usuário
    for (var i = 1; i <= num1; i++) {
        res += i + ", "; // Adicionando o número atual à lista de resultados
    }
    // Exibindo os números na página HTML
    document.getElementById("resultado").value = "Os números de 1 a " + num1 + 
    " são: " + res.slice(0, -2); // Removendo a vírgula e o espaço extra no final
    } else {
    // Caso o número fornecido não seja válido
    document.getElementById("resultado").value = "O número fornecido não é válido. Por favor, insira um número maior que zero.";
    }
}

function somaAte() {
    var num1 = parseInt(document.getElementById("tpNum").value); // Armazena o número fornecido pelo usuário
    var res = 0; // Inicializa a variável para armazenar a soma dos números

    // Verifica se o número fornecido é válido (maior que zero)
    if (num1 > 0) {
        // Loop para somar os números de 1 até o número fornecido pelo usuário
        for (var i = 1; i <= num1; i++) {
            res += i; // Adiciona o número atual à soma
        }
        // Exibe a soma na página HTML
        document.getElementById("resultado").value = "A soma dos números de 1 a " + num1 + " é: " + res;
    } else {
        // Caso o número fornecido não seja válido
        document.getElementById("resultado").value = "O número fornecido não é válido. Por favor, insira um número maior que zero.";
    }
}

function primosAte20() {
    var resultado = "Números primos de 1 a 20: ";

    // Loop para verificar os números de 1 a 20
    for (var num = 1; num <= 20; num++) {
        var primo = true; // Assume que o número é primo inicialmente

        // Verifica se o número é divisível por algum número diferente de 1 e ele mesmo
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                primo = false; // Se for divisível, não é primo
                break; // Sai do loop
            }
        }

        // Se o número for primo, adiciona-o ao resultado
        if (primo && num > 1) {
            resultado += num + " ";
        }
    }

    // Exibe os números primos
    document.getElementById("resultado").value = resultado;
}

function verificarPrimo() {
    var num1

    num1 = parseInt(document.getElementById("tpNum").value);

    // Verifica se o número é menor ou igual a 1
    if (num1 <= 1) {
        document.getElementById("resultado").value = "O número " + num1 + " não é primo.";
        return;
    }

    var primo = true; // Assume que o número é primo inicialmente

    // Loop para verificar se o número é divisível por algum número diferente de 1 e ele mesmo
    for (var i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            primo = false; // Se for divisível, não é primo
            break; // Sai do loop 
        }
    }

    // Exibe o resultado na página HTML
    if (primo) {
        document.getElementById("resultado").value = "O número " + num1 + " é primo.";
    } else {
        document.getElementById("resultado").value = "O número " + num1 + " não é primo.";
    }
}

function calcularFatorial() {
    num1 = parseInt(document.getElementById("tpNum").value);
    var resultado = 1;

    

    // Verifica se o número fornecido é válido
    if (num1 < 0) {
        document.getElementById("resultado").value = "Não é possível calcular o fatorial de um número negativo.";
        return;
    }

    // Calcula o fatorial
    for (var i = 2; i <= num1; i++) {
        resultado *= i;
    }

    // Exibe o resultado na página HTML
    document.getElementById("resultado").value = "O fatorial de " + num1 + " é: " + resultado;
}

function fibonacci() {
    var resultado = document.getElementById("resultado");
    resultado.value = ""; 

    var termo1 = 0;
    var termo2 = 1;
    var proximoTermo;

    // Imprime os dois primeiros termos da sequência de Fibonacci
    resultado.value += termo1 + ", " + termo2 + ", ";

    // Calcula e imprime os próximos termos até o décimo
    for (var i = 3; i <= 10; i++) {
        proximoTermo = termo1 + termo2;
        resultado.value += proximoTermo + ", ";
        termo1 = termo2;
        termo2 = proximoTermo;
    }
}

function imprimirParesEImpares() {
    num1 = parseInt(document.getElementById("tpNum").value);

    var pares = "";
    var impares = "";

    // Loop de 1 até o número fornecido pelo usuário
    for (var i = 1; i <= num1; i++) {
        // Verifica se o número atual é par ou ímpar
        if (i % 2 === 0) {
            pares += i + " ";
        } else {
            impares += i + " ";
        }
    }

    // Exibe os números pares e ímpares no elemento de resultado
    document.getElementById("resultado").value = "Números pares até " + num1 + ": " + pares + "\n\nNúmeros ímpares até " + num1 + ": " + impares;
}

function verificarPrimos() {
    num1 = parseInt(document.getElementById("tpNum").value); 

    var primos = "";

    // Loop de 2 até o número fornecido
    for (var i = 2; i <= num1; i++) {
        var ehPrimo = true; // Assume que o número atual é primo

        // Verifica se o número atual é divisível por qualquer número menor que ele mesmo
        for (var j = 2; j < i; j++) {
            if (i % j === 0) { // Se for divisível por outro número que não seja 1 e ele mesmo
                ehPrimo = false; // Não é primo
                break; // Sai do loop interno
            }
        }

        // Se o número for primo, adiciona-o à string de primos
        if (ehPrimo) {
            primos += i + " ";
        }
    }

    // Exibe os números primos na página
    document.getElementById("resultado").value = "Números primos até " + num1 + ": " + primos;
}

function verificarNumeroPerfeito() {
    num1 = parseInt(document.getElementById("tpNum").value); 
    var somaDivisores = 0;

    // Loop para encontrar os divisores do número
    for (var i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            somaDivisores += i; // Adiciona o divisor à soma
        }
    }

    // Verifica se a soma dos divisores é igual ao próprio número
    if (somaDivisores === num1) {
        document.getElementById("resultado").value = num1 + " é um número perfeito!";
    } else {
        document.getElementById("resultado").value = num1 + " não é um número perfeito.";
    }
}








   




 



  
