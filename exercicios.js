//Implemente uma fila que gerencie o atendimento de clientes em um restaurante.
class Atendimento {
    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente} entrou na fila`)
    }

    atenderCliente() {
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente na fila");
            return;
        }
        const clienteAtendido = this.clientes.shift();
        console.log(`Atendendo cliente ${clienteAtendido}`);
    }
}

const atendimento = new Atendimento();
atendimento.adicionarCliente("Pedro")
atendimento.adicionarCliente("Ana");
atendimento.atenderCliente(); 
atendimento.atenderCliente();

//Crie uma fila que armazene músicas em uma playlist e remova a música quando for tocada.
class Armazenar {
    constructor() {
        this.musicas = [];
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
        console.log(`A música ${musica} foi adcionada a playlist!`)
    }

    tocarMusica() {
        if (this.musicas.length === 0) {
            console.log("A playlist está vazia, adicione uma música.");
            return
        }
        const musicaTocada = this.musicas.shift();
        console.log(`Tocando a música ${musicaTocada}.`)
    }
}

const playlist = new Armazenar();
playlist.adicionarMusica("Aquarela");
playlist.adicionarMusica("Meu Brasil");
playlist.tocarMusica()

//Escreva uma função que use uma fila para simular uma fila de caixa de supermercado.
function filaCaixaSupermercado() {
    let fila = []; // Array usado como fila

    // Adicionar clientes à fila
    function entrarNaFila(cliente) {
        fila.push(cliente); // Adiciona o cliente no final da fila
        console.log(`${cliente} entrou na fila.`);
    }

    // Atender o próximo cliente
    function atenderCliente() {
        if (fila.length === 0) {
            console.log("A fila está vazia. Nenhum cliente para atender.");
            return;
        }
        let clienteAtendido = fila.shift(); // Remove o cliente do início da fila
        console.log(`${clienteAtendido} foi atendido.`);
    }

    // Exibir o estado atual da fila
    function exibirFila() {
        if (fila.length === 0) {
            console.log("A fila está vazia.");
        } else {
            console.log(`Fila atual: ${fila.join(", ")}`);
        }
    }

    // Retorna as funções disponíveis para interação
    return { entrarNaFila, atenderCliente, exibirFila };
}

// Usando a fila
const caixa = filaCaixaSupermercado();

caixa.entrarNaFila("Cliente 1");
caixa.entrarNaFila("Cliente 2");
caixa.entrarNaFila("Cliente 3");

caixa.exibirFila(); // Mostra a fila atual

caixa.atenderCliente(); // Atende o Cliente 1
caixa.atenderCliente(); // Atende o Cliente 2

caixa.exibirFila(); // Mostra a fila restante

caixa.atenderCliente(); // Atende o Cliente 3
caixa.atenderCliente(); // Tenta atender, mas a fila está vazia

