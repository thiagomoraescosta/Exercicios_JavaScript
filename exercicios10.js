//Crie uma classe chamada `Livro` com atributos `titulo`, `autor` e `ano`. Adicione um método para exibir os detalhes do livro.
class Livro {
    constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
 }      
    exibirDetalhes(){
        console.log(`O livro, ${this.titulo} do autor ${this.autor}, foi lançado em ${this.ano}.`)
    }
}

const livro1 = new Livro("O Programador Pragmático", "Andrew Hunt e David Thomas", 1999)
livro1.exibirDetalhes();

//Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial; // Saldo inicial da conta
    }

    depositar(valor) {
        this.saldo += valor; // Adiciona o valor ao saldo
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor; // Subtrai o valor do saldo
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

let minhaConta = new ContaBancaria(100); // Cria uma conta com R$100
minhaConta.depositar(50); // Deposita R$50
console.log(minhaConta.saldo);

//Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    saudacao() {
    console.log(`Bem-vindo ${this.nome}.`)
    }
}
let pessoa1 = new Pessoa("Thiago");
pessoa1.saudacao()

//Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.
class Calculadora {
    constructor() {
        this.nome = "Calculadora Simples"; // Apenas uma propriedade simples
    }

    soma(a, b) {
        return a + b;
    }

    subtracao(a, b) {
        return a - b;
    }

    multiplicacao(a, b) {
        return a * b;
    }

    divisao(a, b) {
        return b !== 0 ? a / b : "Erro: Divisão por zero.";
    }
}

// Exemplo de uso:
const calc = new Calculadora(); // Cria uma nova calculadora

console.log(calc.soma(10, 5)); // 15
console.log(calc.subtracao(10, 5)); // 5
console.log(calc.multiplicacao(10, 5)); // 50
console.log(calc.divisao(10, 2)); // 5
console.log(calc.divisao(10, 0)); // Erro: Divisão por zero.

//Crie uma classe `Agenda` para armazenar e exibir contatos.
class Agenda {
    constructor() {
        this.contatos = []; // Inicializa a lista de contatos vazia
    }

    adicionarContato(nome, telefone) {
        this.contatos.push({ nome, telefone }); // Adiciona um contato como objeto
    }

    exibirContatos() {
        if (this.contatos.length === 0) {
            console.log("A agenda está vazia.");
        } else {
            console.log("Contatos na agenda:");
            this.contatos.forEach((contato, index) => {
                console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
            });
        }
    }
}

// Exemplo de uso:
const minhaAgenda = new Agenda();

minhaAgenda.adicionarContato("João", "1234-5678");
minhaAgenda.adicionarContato("Maria", "9876-5432");
minhaAgenda.adicionarContato("Carlos", "1111-2222");

minhaAgenda.exibirContatos();
