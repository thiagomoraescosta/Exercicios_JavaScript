//Crie uma árvore para representar uma hierarquia organizacional (CEO - Diretores - Gerentes - Analistas).
class Hierarquia {
    constructor(cargo) {
      this.cargo = cargo;
      this.subordinados = [];
    }
  
    adicionarSubordinado(subordinado) {
      if (subordinado instanceof Hierarquia) {
        this.subordinados.push(subordinado);
      } else {
        console.error("O subordinado deve ser uma instância da classe Hierarquia.");
      }
    }
    contarNos() {
        let total = 1; // Conta o nó atual (this)
    
        for (const subordinado of this.subordinados) {
          total += subordinado.contarNos(); // Conta os nós recursivamente
        }
    
        return total;
  }
 }
  
  // Criação da hierarquia organizacional
  const ceo = new Hierarquia("Thiago (CEO)");
  const diretor1 = new Hierarquia("Pedro (Diretor de TI)");
  const diretor2 = new Hierarquia("Mariana (Diretora de Marketing)");
  const gerente1 = new Hierarquia("Ana (Gerente de Desenvolvimento)");
  const gerente2 = new Hierarquia("Lucas (Gerente de Mídias)");
  const analista1 = new Hierarquia("Beatriz (Analista de Sistemas)");
  const analista2 = new Hierarquia("Carla (Analista de Marketing)");
  
  // Montagem da árvore hierárquica
  ceo.adicionarSubordinado(diretor1);
  ceo.adicionarSubordinado(diretor2);
  diretor1.adicionarSubordinado(gerente1);
  diretor2.adicionarSubordinado(gerente2);
  gerente1.adicionarSubordinado(analista1);
  gerente2.adicionarSubordinado(analista2);
  
  // Exibição da hierarquia organizacional formatada
  console.log(JSON.stringify(ceo, null, 2));

  // Saída: Número total de nós na hierarquia:
  console.log(`Número total de nós na hierarquia: ${ceo.contarNos()}`);

//Implemente uma função para contar o número total de nós em uma árvore.
    //contarNos() {
    //    let total = 1; // Conta o nó atual (this)

    //    for (const subordinado of this.subordinados) {
    //      total += subordinado.contarNos(); // Conta os nós recursivamente
    //    }

    //    return total;
    //}
  
//console.log(`Número total de nós na hierarquia: ${ceo.contarNos()}`);

//Crie uma árvore genealógica e implemente um método para listar todos os descendentes de um nó.
class Pessoa {
    constructor(nome) {
      this.nome = nome;
      this.filhos = [];
    }
  
    adicionarFilho(filho) {
      if (filho instanceof Pessoa) {
        this.filhos.push(filho);
      } else {
        console.error("O filho deve ser uma instância da classe Pessoa.");
      }
    }
  
    listarDescendentes() {
      let descendentes = [];
  
      for (const filho of this.filhos) {
        descendentes.push(filho.nome); // Adiciona o nome do filho à lista
        descendentes = descendentes.concat(filho.listarDescendentes()); // Adiciona recursivamente os descendentes do filho
      }
  
      return descendentes;
    }
  }
  
  // Exemplo de uso:
  const avo = new Pessoa("João");
  const pai = new Pessoa("Carlos");
  const tio = new Pessoa("Roberto");
  const filho1 = new Pessoa("Pedro");
  const filho2 = new Pessoa("Ana");
  const neto = new Pessoa("Marcos");
  
  avo.adicionarFilho(pai);
  avo.adicionarFilho(tio);
  pai.adicionarFilho(filho1);
  pai.adicionarFilho(filho2);
  filho1.adicionarFilho(neto);
  
  console.log(`Descendentes de João: ${avo.listarDescendentes().join(", ")}`);
  // Saída: Descendentes de João: Carlos, Pedro, Marcos, Ana, Roberto
  
  console.log(`Descendentes de Carlos: ${pai.listarDescendentes().join(", ")}`);
  // Saída: Descendentes de Carlos: Pedro, Marcos, Ana
  
//Implemente uma busca em profundidade e largura para encontrar um nó com um valor específico.
class Node {
    constructor(valor) {
      this.valor = valor;
      this.filhos = [];
    }
  
    adicionarFilho(filho) {
      if (filho instanceof Node) {
        this.filhos.push(filho);
      } else {
        console.error("O filho deve ser uma instância da classe Node.");
      }
    }
  
    buscaProfundidade(valor) {
      if (this.valor === valor) return this; // Retorna o nó atual se o valor for encontrado
  
      for (const filho of this.filhos) {
        const resultado = filho.buscaProfundidade(valor); // Chamada recursiva nos filhos
        if (resultado) return resultado;
      }
  
      return null; // Retorna null se o valor não for encontrado
    }
  
    buscaLargura(valor) {
      const fila = [this]; // Inicializa a fila com o nó raiz
  
      while (fila.length > 0) {
        const noAtual = fila.shift(); // Remove o primeiro nó da fila
  
        if (noAtual.valor === valor) return noAtual; // Retorna o nó se o valor for encontrado
  
        fila.push(...noAtual.filhos); // Adiciona os filhos do nó atual à fila
      }
  
      return null; // Retorna null se o valor não for encontrado
    }
  }
  
  // Exemplo de uso:
  const raiz = new Node("Raiz");
  const filho01 = new Node("Filho1");
  const filho02 = new Node("Filho2");
  const neto01 = new Node("Neto1");
  const neto02 = new Node("Neto2");
  
  raiz.adicionarFilho(filho01);
  raiz.adicionarFilho(filho02);
  filho1.adicionarFilho(neto01);
  filho2.adicionarFilho(neto02);
  
  console.log("Busca em Profundidade:");
  const resultadoDFS = raiz.buscaProfundidade("Neto1");
  console.log(resultadoDFS ? `Nó encontrado: ${resultadoDFS.valor}` : "Nó não encontrado");
  // Saída: Nó encontrado: Neto1
  
  console.log("Busca em Largura:");
  const resultadoBFS = raiz.buscaLargura("Neto2");
  console.log(resultadoBFS ? `Nó encontrado: ${resultadoBFS.valor}` : "Nó não encontrado");
  // Saída: Nó encontrado: Neto2
  