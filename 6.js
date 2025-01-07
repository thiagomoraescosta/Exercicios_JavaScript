// ARRAYS

let frutas = ["Maça", "Banana", "Laranja"]

console.log(frutas)

// adicionando elementos no final da lista
frutas.push("Abacaxi")
frutas.push("Melancia")

console.log(frutas)

// adiciona um elemento no inicio
frutas.unshift("Melão")
console.log(frutas)

for (let i = 0; i < frutas.length; i++) {
    let frutaDoLoop = frutas[i]

    console.log(`Minha fruta preferida é ${frutaDoLoop}`)
}



// removendo elementos no inicio da lista
frutas.shift()
console.log(frutas)

// removendo elementos no final da lista
frutas.pop()
console.log(frutas)

console.log(frutas.length)

// Acessar o ultimo elemento
let numeros = [5, 10, 15];
console.log(numeros[numeros.length - 1]);


