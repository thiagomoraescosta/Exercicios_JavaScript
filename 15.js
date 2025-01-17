//FILAS

class Fila {
    constructor() {
      this.itens = [];
    }
  
    enqueue(elemento) {
      this.itens.push(elemento); // Adiciona ao final
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "A fila está vazia!";
      }
      return this.itens.shift(); // Remove do início
    }
  
    front() {
      return this.isEmpty() ? "A fila está vazia!" : this.itens[0];
    }
  
    isEmpty() {
      return this.itens.length === 0;
    }
  }
  
  const fila = new Fila();
  fila.enqueue("Cliente 1");
  fila.enqueue("Cliente 2");
  console.log(fila.front());  // Saída: Cliente 1
  fila.dequeue();
  console.log(fila.front());  // Saída: Cliente 2