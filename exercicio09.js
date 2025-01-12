//Escreva uma função recursiva que conte de `n` até 0.
function contarRegressivo(n) {
    if (n == 0) {
        console.log(0);
        return       
    }
    console.log(n)
    contarRegressivo(n - 1)

}

contarRegressivo(5)

//Implemente uma função que calcule o fatorial de um número.
function fatorial(n) {
    if (n == 0) return 1;
    return n * fatorial(n - 1);
}

console.log(fatorial(5));

//Crie uma função que some todos os números de um array usando recursão.
function somarArray(array) {
    if (array.length === 0) return 0;
    return array[0] + somarArray(array.slice(1));
}
console.log(somarArray([1, 2, 3, 4]));



//Crie uma função que liste todos os arquivos de um diretório usando recursão.
function listarArquivos(diretorio) {
    for (let item of diretorio) {
      if (Array.isArray(item)) {
        listarArquivos(item); // Chamada recursiva
      } else {
        console.log(item); // Arquivo
      }
    }
  }
  
  let arquivos = ["index.html", ["css", "style.css"], ["js", "script.js"]];
  listarArquivos(arquivos);