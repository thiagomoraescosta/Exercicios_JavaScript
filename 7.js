// FUNCOES
function calculadora(a, b, operacao) {
    switch (operacao) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*': 
            return a * b
        case '/':
            return a / b
        default:
            console.log("Operação inválida!")
    }
}

let resulatdo = calculadora(10, 2, '/');
console.log(resulatdo);

function saudacao(nome) {
    return `Olá, ${nome}!`;
  }
  
  console.log(saudacao("Thiago"));