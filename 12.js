// HERANÇA

class Veiculo {
    constructor(marca, modelo) {
        this.modelo = modelo;
        this.marca = marca;
    }

    imprimirInformcacoes() {
        console.log(`${this.marca} - ${this.modelo}`)
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, numeroPortas) {
        super(marca, modelo)
        this.numeroPortas = numeroPortas
    }

    abrirPortas() {
        console.log(`Abrindo as ${this.numeroPortas} portas desse carro`);
        
    }
}

class Moto extends Veiculo {
    darGrau() {
        console.log("Dando grau");
        
    }
}

const carro1 = new Carro("Toyota", "Corrola", 4)
carro1.abrirPortas()

//console.log(carro1.numeroPortas)
//carro1.imprimirInformcacoes()

const moto1 = new Moto("Honda", "Biz")
moto1.darGrau()
moto1.imprimirInformcacoes()