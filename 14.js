// PILHAS

class Pilha {
    constructor() {
      this.itens = [];
    }
  
    push(elemento) {
      this.itens.push(elemento);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "A pilha está vazia!";
      }
      return this.itens.pop();
    }
  
    peek() {
      return this.itens[this.itens.length - 1];
    }
  
    isEmpty() {
      return this.itens.length === 0;
    }
  }
  
  const pilha = new Pilha();
  pilha.push(1);
  pilha.push(2);
  console.log(pilha.peek()); 
  pilha.pop();
  console.log(pilha.peek());