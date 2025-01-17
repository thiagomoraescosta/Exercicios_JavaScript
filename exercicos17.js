//Implemente um grafo para representar rotas entre cidades.
const rotas = {
    SP: ["RJ", "MG"],
    RJ: ["SP", "ES"],
    MG: ["SP", "ES"],
    ES: ["RJ", "MG"],
};

for (const cidade in rotas) {
    console.log(`${cidade} -> ${rotas[cidade].join(", ")}`);
  }

//Crie uma função para verificar se dois nós estão conectados em um grafo.
function verificarConexao(grafo, origem, destino) {
  // Se a origem for igual ao destino, eles estão conectados
  if (origem === destino) return true;

  // Cria uma fila para explorar os nós
  let fila = [origem];

  // Enquanto houver nós na fila
  while (fila.length > 0) {
    // Retira o primeiro nó da fila
    const noAtual = fila.shift();

    // Verifica se o nó atual tem conexão com o destino
    if (grafo[noAtual].includes(destino)) {
      return true;
    }

    // Adiciona os vizinhos do nó atual na fila
    fila = fila.concat(grafo[noAtual]);
  }

  // Se nenhum caminho foi encontrado, retorna falso
  return false;
}

// Exemplo de grafo simples
const grafo = {
  A: ["B", "C"],
  B: ["D"],
  C: [],
  D: ["E"],
  E: [],
};

// Testando a função
console.log(verificarConexao(grafo, "A", "E")); // true (A -> B -> D -> E)
console.log(verificarConexao(grafo, "A", "F")); // false (F não existe no grafo)

//Implemente um grafo para modelar um sistema de amizades em uma rede social.
const redeSocial = {
    Alice: ["Bob", "Carol"],
    Bob: ["Alice", "David"],
    Carol: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Carol"]
  };
  
  console.log(redeSocial["Alice"]); // Saída: ['Bob', 'Carol']