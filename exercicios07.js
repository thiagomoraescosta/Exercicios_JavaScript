//Crie uma função que calcule o dobro de um número.
function calcularDobro(numero) {
    return numero * 2
}

let resulatdo = calcularDobro(5);
console.log(resulatdo);

//Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
function boasVindas(nome) {
    return `Bem-vindo(a), ${nome}!`
}

let mensagem = boasVindas("Thiago")
console.log(mensagem)

//Crie uma função que receba dois números e retorne o maior deles.
function maiorNumeros(num1, num2) {
   return num1 > num2 ? num1 : num2
}

let maior = maiorNumeros(60, 70)
console.log(`O maior número é: ${maior}`)

//Implemente uma função que calcule a média de três números.
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let media = calcularMedia(10, 20, 30);
console.log(`A média é: ${media}`);

//Crie uma função que receba um array de números e retorne a soma deles.
function somarArray(numeros){
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];        
    }
    return soma;
}

let numeros = [10, 20, 30, 40];
let resultado = somarArray(numeros)
console.log(`A soma dos números é: ${resultado}`);

//Escreva uma função que receba uma string e retorne o número de caracteres dessa string.
function contarCaracteres(texto) {
    return texto.length;
}

let frase = "Olá, mundo!";
let numeroDeCaracteres = contarCaracteres(frase);
console.log(`A frase contém ${numeroDeCaracteres} caracteres.`);
