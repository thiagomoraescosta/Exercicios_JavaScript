//Verifique se um número é maior que 10 e menor que 20.
let numero = 19;

if (numero > 10 && numero < 20) {
    console.log("O número é maior que 10 e menor que 20")
} else {
    console.log("O número não é maior que 10 e menor que 20")
}
//Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
let idade = 16;
let tituloDeEleitor = false;

if(idade >= 16 && tituloDeEleitor) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}

//Use `&&` e `||` para criar um sistema de login onde um usuário pode entrar com email **ou** nome de usuário, mas precisa fornecer uma senha válida.
let email = true;
let nomeUsuario = false;
let senhaValida = true;

if((email || nomeUsuario) && senhaValida) {
    console.log("Login realizado com sucesso!")
} else {
    console.log("Login não realizado!")
}
//Implemente um sistema de notas onde:
//    - Notas >= 90: "Aprovado com A"
//    - Notas >= 70 e < 90: "Aprovado com B"
//    - Notas < 70: "Reprovado".
let nota = 70;

if(nota >= 90) {
    console.log("Aprovado com A")
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado com B")
} else {
    console.log("Reprovado")
}

// Crie uma variável `saldo` e verifique:
//   - Se `saldo > 0`: Mostre "Saldo positivo".
//   - Se `saldo === 0`: Mostre "Sem saldo".
//    - Caso contrário, mostre "Saldo negativo".
let saldo = -200;

if(saldo > 0) {
    console.log("Saldo positivo")
} else if (saldo === 0) {
    console.log("Sem saldo")
} else {
    console.log("Saldo negativo")
}

//Use o operador `!` para verificar se uma luz está apagada e ligue-a.
let luzApagada = true;

if(!luzApagada) {
    console.log("A luz já está acessa.")
} else {
    luzApagada = false;
    console.log("A luz estava apagada. Agora está acesa.")
}