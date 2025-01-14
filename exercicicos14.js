//Implemente uma pilha com métodos para adicionar, remover e visualizar o topo.
class Editor {
    constructor() {
        this.acoes = [];
    }

    adicionarAcoes(acao) {
        this.acoes.push(acao);
        console.log(`Ação adicionada: ${acao}`)
    }

    removerAcao() {
        if (this.acoes.length === 0) {
            console.log("Nada para remover")
            return;
        }
        const ultimaAcao = this.acoes.pop()
        console.log(`Ação removida: ${ultimaAcao}`)
    }

    peek() {
        return this.acoes[this.acoes
            .length - 1];
    }
}

const editor = new Editor();
editor.adicionarAcoes("Olá")
editor.adicionarAcoes("Mundo")
editor.removerAcao()
console.log(editor.peek());

//Crie uma função que use uma pilha para verificar se uma string é um palíndromo.
function verificarPalindromo(texto) {
    // Remove espaços e converte para letras minúsculas
    let textoLimpo = texto.replace(/\s+/g, '').toLowerCase();

    let pilha = []; // Pilha para armazenar os caracteres

    // Adiciona cada caractere na pilha
    for (let i = 0; i < textoLimpo.length; i++) {
        pilha.push(textoLimpo[i]);
    }

    let textoReverso = '';

    // Remove os caracteres da pilha para formar o texto reverso
    while (pilha.length > 0) {
        textoReverso += pilha.pop();
    }

    // Verifica se o texto original é igual ao texto reverso
    return textoLimpo === textoReverso;
}

// Exemplos de uso
console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("A man a plan a canal Panama"));
console.log(verificarPalindromo("Olá mundo"));

//Simule o funcionamento do botão "Desfazer" em um editor de texto usando pilhas.
class Editor1 {
    constructor() {
      this.acoes = [];
    }
  
    realizarAcao(acao) {
      this.acoes.push(acao);
      console.log(`Ação realizada: ${acao}`);
    }
  
    desfazer() {
      if (this.acoes.length === 0) {
        console.log("Nada para desfazer.");
        return;
      }
      const ultimaAcao = this.acoes.pop();
      console.log(`Ação desfeita: ${ultimaAcao}`);
    }
  }
  
  const editor1 = new Editor1();
  editor1.realizarAcao("Escreveu 'Olá'");
  editor1.realizarAcao("Apagou uma palavra");
  editor1.desfazer();

//Escreva uma função que converta números decimais para binários usando pilhas.
function decimalParaBinario(numero) {
    const pilha = [];
    while (numero > 0) {
      pilha.push(numero % 2);
      numero = Math.floor(numero / 2);
    }
    return pilha.reverse().join("");
  }
  
  console.log(decimalParaBinario(10));
