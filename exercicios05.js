//Use um loop `for` para imprimir os números de 1 a 10 no console.
for ( let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`);
}

//Crie uma lista de nomes e use um `for` para exibir cada nome.
let nomes = ["Beatriz", "Thiago", "Josué", "Efraim"]
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
//  console.log(`Nome ${nomes[i]}`)
}

//Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
let numeros = [8, 5, 9, 12, 29];
for (let i = 0; numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(`O primeiro número maior que 10 encontrado é: ${numeros[i]}`);
        break;
    }
}

//Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
let contador = 10; // Inicia o contador em 10
while (contador >= 0) {
    if (contador === 0) {
        console.log("Lançamento!");
    } else {
        console.log(contador);
    }
    contador--;
}

// Com um `do...while`, simule um caixa eletrônico pedindo a senha até que ela esteja correta.let senhaCorreta = "1234"; // A senha correta

//let tentativa; // Variável para armazenar a tentativa do usuário

//do {
//    tentativa = prompt("Digite sua senha:"); // Solicita a senha do usuário
//    if (tentativa !== senhaCorreta) {
//       console.log("Senha incorreta. Tente novamente.");
//    }
//} while (tentativa !== senhaCorreta);

//console.log("Senha correta! Acesso liberado.");

//Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).
let numero = 5; // O número para calcular o fatorial
let fatorial = 1; // Variável para armazenar o resultado
let i = numero; // Variável para o loop

while (i > 0) {
    fatorial *= i; // Multiplica o fatorial pelo valor atual de i
    i--; // Diminui o valor de i
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);
