// 01-Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function challenge01() {
    alert("Hello Wold!")
}

// 02-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

function challenge02(a, b) {
    a = parseInt(prompt("Digite um numero"))
    b = parseInt(prompt("Digite um numero"))
    alert(`A soma de ${a} + ${b} é : ${a + b}`)
}

// 03 - Crie um script que declara uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

function challenge03() {
    let num = prompt(" Digite um número")
    if (num === "" || num === null) {
        alert("Insira um número!")
    }
    else if (isNaN(num)) {
        alert("Não é um número")
    } else { alert("É um número") }
}

// 04 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

function challenge04() {
    let nome = prompt(" Digite uma string")
    if (nome === "" || nome === null) {
        alert("Insira uma string!")
    }
    else if (isNaN(nome)) {
        alert("É uma string")
    } else { alert("Não é uma string") }
}

// 05 - Crie um script que declara uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


// 06 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

function challenge06(a, b) {
    a = parseInt(prompt("Digite um numero"))
    b = parseInt(prompt("Digite um numero"))
    alert(`A subtração de ${a} - ${b} é : ${a - b}`)
}

// 07 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

function challenge07(a, b) {
    a = parseInt(prompt("Digite um numero"))
    b = parseInt(prompt("Digite um numero"))
    alert(`A multiplicação de ${a} * ${b} é : ${a * b}`)
}

// 08 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

function challenge08(a, b) {
    a = parseInt(prompt("Digite um numero"))
    b = parseInt(prompt("Digite um numero"))
    alert(`A divisão de ${a} / ${b} é : ${a / b}`)
}

// 09 - Crie um script que declara uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

function challenge09() {
    let num = prompt(" Digite um número")
    if (num === '' || num === null){
    alert("Insira um número: ")
    }
    else if (num % 2 == 0 ){ 
       alert("É um número PAR")
    } else { alert("Não é um número PAR") }
}


// 10-  Crie um script que declara uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

function challenge10() {
    let num = prompt(" Digite um número")
    if (num === '' || num === null){
    alert("Insira um número: ")
    }
    else if (num % 2 == 0 ){ 
       alert("Não é um número IMPAR")
    } else { alert("É um número IMPAR") }
}