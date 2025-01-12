// CALSSES E OBJETOS
class Carro {
    constructor(marca, modelo, cor) {
      this.marca = marca; // Atributo
      this.modelo = modelo;
      this.cor = cor;
    }
  
    acelerar() { // Método
      console.log(`${this.marca} - ${this.modelo} está acelerando! 🚗💨`);
    }
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", "Branco");
  console.log(meuCarro);
  
  meuCarro.acelerar(); 