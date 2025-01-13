//Crie uma classe `ContaBancaria` que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.
class ContaBancaria {
    #saldo

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
        console.log(`Deposito de R$${valor} realizado com sucesso!`);
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
            
        }
    }

    consultarSaldo() {
        return `Saldo atual: R$${this.#saldo}`;
    }
}
const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo());
minhaConta.sacar(600);
console.log(minhaConta.consultarSaldo());
minhaConta.sacar(1000);

//Implemente uma classe `Usuario` que armazena uma senha privada e permite alterar a senha com validação.
class Usuario {
    #senha

    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual === this.#senha) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso!")
        } else {
            console.log("Senha atual incorreta!")
        }
    }
}
const usuario = new Usuario('1234');
usuario.alterarSenha('1234', 'abcd');
usuario.alterarSenha('1234', 'abcd');

//Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.
class ControleRemoto {
    ligarTv() {
        console.log("Tv ligada!")
    }

    desligarTv() {
        console.log("Tv desligada!")
    }
}
const minhaTv = new ControleRemoto();
minhaTv.ligarTv();
minhaTv.desligarTv();

//Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.
class Cofre {
    #valor;
    #senha;

    constructor(senhaInicial, valorInicial) {
        this.#senha = senhaInicial;
        this.#valor = valorInicial;
    }

    acessar(senha) {
        if (senha === this.#senha) {
            console.log(`Valor no cofre R$${this.#valor}`);
        } else {
            console.log("Senha incorreta! Acesso negado")
        }
    }

    alterarValor(senha, novoValor) {
        if (senha === this.#senha){
            this.#valor = novoValor;
            console.log("Valor alterado com sucesso!")
        } else {
            console.log(" Sneha incorreta! Acesso negado")
        }
    }
}

const meuCofre = new Cofre("senha123", 1000);
meuCofre.acessar("senha123")
meuCofre.alterarValor("senha123", 1500);
meuCofre.acessar("senha123")

//Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.
class CarrinhoCompras {
    #itens

    constructor(itens) {
        this.#itens = [];
    }

    adicionarItens(item) {
        this.#itens.push(item);
        console.log (`Item "${item}" adicionado com sucesso!`)
    }
    
    removerItens(item) {
       if(this.#itens.includes(item)){
        this.#itens = this.#itens.filter(i => i !== item);
        console.log(`Item "${item}"removido com sucesso!`)
       } else {
        console.log(`Item "${item}" não encontrado no carrinho.`);
       }
    }

    consultarLista() {
       return this.#itens
    }
}

const meuCarrinho = new CarrinhoCompras()
meuCarrinho.adicionarItens("Abacaxi")
meuCarrinho.adicionarItens("Laranja")
console.log(meuCarrinho.consultarLista())

meuCarrinho.removerItens("Abacaxi")
console.log(meuCarrinho.consultarLista())

meuCarrinho.removerItens("mel")
console.log(meuCarrinho.consultarLista())