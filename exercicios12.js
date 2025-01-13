//Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.
// Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;  // Nome do funcionário
        this.salario = salario;  // Salário do funcionário
    }

    // Método para exibir as informações do funcionário
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$${this.salario}`);
    }
}

// Subclasse Gerente (herda de Funcionario)
class Gerente extends Funcionario {
    constructor(nome, salario, setor) {
        super(nome, salario);  // Chama o construtor da classe pai (Funcionario)
        this.setor = setor;  // Atributo adicional de setor para o Gerente
    }

    // Método para exibir as informações do gerente
    exibirInformacoes() {
        super.exibirInformacoes();  // Chama o método da classe pai
        console.log(`Setor: ${this.setor}`);  // Exibe o setor do gerente
    }
}

// Exemplo de uso:
const funcionario = new Funcionario("Carlos", 3000);
console.log("Informações do Funcionário:");
funcionario.exibirInformacoes();

console.log("\nInformações do Gerente:");
const gerente = new Gerente("Ana", 8000, "TI");
gerente.exibirInformacoes();

//Escreva uma classe `Animal` e subclasses como `Cachorro` e `Gato`, cada uma com métodos específicos.
// Classe Animal
// Classe Animal
class Animal {
    constructor(nome) {
        this.nome = nome;  // Nome do animal
    }

    emitirSom() {
        console.log("O animal emite um som.");
    }
}

// Subclasse Cachorro (herda de Animal)
class Cachorro extends Animal {
    emitirSom() {
        console.log("O cachorro late: Au Au!");
    }
}

// Subclasse Gato (herda de Animal)
class Gato extends Animal {
    emitirSom() {
        console.log("O gato mia: Miau!");
    }
}

// Exemplo de uso:
const cachorro = new Cachorro("Rex");
console.log(cachorro.nome);
cachorro.emitirSom();

const gato = new Gato("Mingau");
console.log(gato.nome);
gato.emitirSom();

//Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo.
// Classe Conta
class Conta {
    constructor(saldo) {
        this.saldo = saldo;  // Inicializa o saldo da conta
    }

    // Método para consultar o saldo
    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }

    // Método para depositar dinheiro
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado!`);
    }
}

// Subclasse ContaPoupanca (herda de Conta)
class ContaPoupanca extends Conta {
    constructor(saldo, taxaJuros) {
        super(saldo);  // Chama o construtor da classe pai (Conta)
        this.taxaJuros = taxaJuros;  // Atributo para armazenar a taxa de juros
    }

    // Método para aplicar juros ao saldo
    aplicarJuros() {
        let juros = this.saldo * (this.taxaJuros / 100); // Calcula os juros
        this.saldo += juros; // Adiciona os juros ao saldo
        console.log(`Juros de R$${juros.toFixed(2)} aplicados!`);
    }
}

// Criando uma conta poupança com saldo de R$1000 e juros de 5%
let minhaConta = new ContaPoupanca(1000, 5);

// Consultando o saldo inicial
minhaConta.consultarSaldo();

// Depositando R$500
minhaConta.depositar(500);

// Consultando o saldo após o depósito
minhaConta.consultarSaldo();

// Aplicando juros de 5%
minhaConta.aplicarJuros();

// Consultando o saldo final com juros
minhaConta.consultarSaldo();
