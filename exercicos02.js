//Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
let mes = 6;
switch (mes) {
    case 1: 
    console.log("Janeiro")
    break
    case 2: 
    console.log("Fevereiro")
    break
    case 3: 
    console.log("Março")
    break
    case 4: 
    console.log("Abril")
    break
    case 5: 
    console.log("Maio")
    break
    case 6: 
    console.log("Junho")
    break
    default:
        console.log("Mês inexistente")

}

//Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
let idade = 17;
if (idade >=18) {
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}

//Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
let saldo = 0;
let mensagem = saldo > 0 ? "Saldo positivo" : "Saldo Negativo";

console.log(mensagem);

//Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
let numero = 0;
if (numero >0){
    console.log("Positivo")
} else if (numero <0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}

//Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.
let opcoes = 1;
switch (opcoes) {
    case 1:
        console.log("Sacar");
    break
    case 2:
        console.log("Depositar");
    break
    case 3:
        console.log("Saldo")
    break
    default:
        console.log("Função indisponivel")
}