//Crie um array com suas três cores favoritas e adicione uma nova cor no final.
let coresFavoritas = ["Verde", "Azul", "Amarelo"];
coresFavoritas.push("Branca");
console.log(coresFavoritas);

//Use um loop para exibir todos os itens de um array de compras.
let compras = ["Arroz", "Feijão", "Café"];
for (let i = 0; i < compras.length; i++) {
    let loopDaCompras = compras[i];

    console.log(loopDaCompras)
}

//Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.
let numeros = [10, 20, 30, 40, 50]
let subArray = numeros.slice(3, 5)
console.log(subArray)

//Crie um array de tarefas e remova a primeira tarefa usando `shift`.
let tarefas = ["Trabalhar", "Descansar", "Estudar"]
tarefas.shift()
console.log(tarefas)

//Use `splice` para substituir o terceiro item de um array por "Substituído".
let carros = ["Gol", "Fusca", "Opala", "Fox"];
carros.splice(2, 1, "Substituído");
console.log(carros);

//Transforme um array de palavras em uma frase completa usando `join`.
let palavras = ["Só", "Jesus", "Salva"];
let frase = palavras.join(" ");
console.log(frase)