//MATRIZES

let matriz = [
    [1, 10, 20],
    [30, 5, 6],
    [7, 8, 15]
];
console.log(matriz[1][2]);//Acessando Elementos de uma Matriz

for ( let i =0; i < matriz.length; i++) {
    let subArray = matriz[i]
    for ( let j = 0; j < subArray.length; j++) {
        console.log(matriz[i][j]);
        
    }
}

//Criando Matrizes Dinamicamente
let linhas = 3;
let colunas = 3;
let matrizz = [];

for (let i = 0; i < linhas; i++) {
  matrizz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matrizz[i][j] = i + j;  // Exemplo: Soma dos índices
  }
}

console.log(matrizz);

