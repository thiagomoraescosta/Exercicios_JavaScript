// Exercícios

// Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como:"Meu nome é [nome] e tenho [idade] anos".
let nome = "Thiago";
let idade = 39;

console.log("Meu nome é",nome,"e tenho",idade,"anos.")

//Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.
let preco = 50;
let desconto = 10;
let precoFinal = preco - desconto;

console.log("O preço final do produto é",precoFinal)

//Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.
let comidasFavoritas = ["Feijoada", "Churrasco","Nhoque"]

console.log(comidasFavoritas[1])

//Crie um objeto que represente um livro, com propriedades como titulo, autor e ano. Mostre no console o título e o autor.
let livro = {
    titulo: "O Programador Pragmático",
    autor: "Andrew Hunt e David Thomas",
    ano: 1999
};
console.log(livro.titulo, livro.autor)

//Declare uma variável estaLogado com o valor false. Depois, mude o valor para true e imprima a mensagem: "Status de login: [valor da variável]".
let estaLogado = false;
estaLogado = true;

console.log("Status de login:",estaLogado)

//Crie uma variável constante chamada PI com o valor 3.14. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.
const PI = 3.14;
const raio = 5;
const area = PI * (5 ** 2);

console.log("A área do circulo com raio", raio, "é:", area);