// NOS

class Pessoa {
    constructor(nome) {
      this.nome = nome;
      this.filhos = [];
    }
  
    adicionarFilho(filho) {
        if (filho instanceof Pessoa) { // Verifica se o filho é uma instância de Pessoa
          this.filhos.push(filho);
        } else {
          console.error("O filho precisa ser uma instância da classe Pessoa.");
        }
    }
  }
  
  const avo = new Pessoa("João");
  const pai = new Pessoa("Carlos");
  const filho = new Pessoa("Pedro");
  
  avo.adicionarFilho(pai);
  pai.adicionarFilho(filho);
  console.log(JSON.stringify(avo, null, 2));
  
  