// GRAFOS

function buscaEmProfundidade(grafo, no, visitados = new Set()) {
    if (visitados.has(no)) return;
    console.log(no);
    visitados.add(no);
    grafo[no].forEach(vizinho => buscaEmProfundidade(grafo, vizinho, visitados));
  }
  
  const grafo = {
    1: [2, 5],
    2: [1, 4, 3],
    3: [2, 4],
    4: [2, 3, 5, 6],
    5: [1, 4],
    6: [4]
  };
  
  buscaEmProfundidade(grafo, 1);

  function buscaEmLargura(grafo, inicio) {
    const visitados = new Set();
    const fila = [inicio];
  
    while (fila.length > 0) {
      const no = fila.shift();
      if (!visitados.has(no)) {
        console.log(no);
        visitados.add(no);
        fila.push(...grafo[no]);
      }
    }
  }
  
  buscaEmLargura(grafo, 1);