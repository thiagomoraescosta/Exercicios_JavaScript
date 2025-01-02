//AULA 2 - CONDICIONAIS

let hora = 20

if (hora <12) {
    console.log("Bom dia!")
} else if (hora <18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

let diaDaSemana = 4

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    default:
        console.log("Dia invalido")
}

// Operador Ternário
let idade = 18;
let mensagem = idade >= 18 ? "Pode entrar! 🎉" : "Entrada proibida! ❌";

console.log(mensagem);

//Exemplos Práticos
//Verificando Par ou Ímpar:
let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}

// Classificando Notas:
let nota = 90;

if (nota >= 90) {
  console.log("Aprovado com A! 🏆");
} else if (nota >= 70) {
  console.log("Aprovado com B.");
} else {
  console.log("Reprovado. 😔");
}

//Escolhendo uma Ação com switch:
let opcao = "pagar";

switch (opcao) {
  case "pagar":
    console.log("Processando pagamento...");
    break;
  case "cancelar":
    console.log("Cancelando pedido...");
    break;
  default:
    console.log("Opção inválida!");
}
