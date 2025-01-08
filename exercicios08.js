//Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.
let linhas = 3;
let colunas = 3;
let matriz = [];
let contador = 1;

for(let i = 0; i < linhas; i++) {
    matriz[i] = []; // Cria uma nova linha
    for ( let j = 0; j < colunas; j++) {
    matriz[i][j] = contador++; // Preenche a célula com o valor do contador e incrementa
 }
}
console.log(matriz);

//Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.
function somaMatriz(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

let matrizExemplo = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 15]
];

let resultado = somaMatriz(matrizExemplo);
console.log(`A soma dos elementos da matriz é: ${resultado}`);

//Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".
let tabuleiro = [];

for (let i = 0; i < 8; i++) {
    let linha = [];
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            linha.push("⬜"); // Casas brancas
        } else {
            linha.push("⬛"); // Casas pretas
        }
    }
    tabuleiro.push(linha);
}

// Exibindo o tabuleiro
tabuleiro.forEach(linha => console.log(linha.join(" ")));

//Verifique quantos números em uma matriz são pares.
let matrizz = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 15]
  ];
  
  let numerosPares = 0;
  for (let i = 0; i < matrizz.length; i++) {
    for (let j = 0; j < matrizz[i].length; j++) {
      if (matrizz[i][j] % 2 === 0) {
        numerosPares++;
      }
    }
  }
  console.log(`A quantidade de números pares são: ${numerosPares}`); 

//Substitua todos os valores maiores que 10 em uma matriz por `0`.
let matrizzz = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 15]
];

for (let i = 0; i < matrizzz.length; i++) {
    for (let j = 0; j < matrizzz[i].length; j++) {
        if (matrizzz[i][j] > 10) { // Verifica se o valor é maior que 10
            matrizzz[i][j] = 0; // Substitui o valor por 0
        }
    }
}

console.log(matrizzz);

//Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.
function multiplicarMatriz(matriz, valor) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= valor; // Multiplica cada elemento pelo valor fornecido
        }
    }
    return matriz; // Retorna a matriz modificada
}

// Exemplo de uso:
let matrizExemploo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let valorMultiplicacao = 2; // Valor pelo qual queremos multiplicar os elementos

let resultadoo = multiplicarMatriz(matrizExemploo, valorMultiplicacao);
console.log(resultadoo);
