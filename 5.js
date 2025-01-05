// LOOPS

for (let i = 1; i <= 20; i++) {
    console.log("Numero", i);
}

let contador = 0;
while (contador < 10) {
    console.log("Contador", contador);
    contador++;
}

let numero = 5;
do {
  console.log(`Executando...`);
  numero--;
} while (numero > 5);


for (let i = 0; i < 10; i++) {
    if (i == 5) break
    console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) continue
  console.log(i);
}

//Somando Números
let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log(`Soma total: ${soma}`);

// Buscando um valor
let numeros = [3, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === busca) {
    console.log(`Número ${busca} encontrado na posição ${i}!`);
    break;
  }
}