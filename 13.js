// POLIMORFISMO

class Veiculo {
    acelerar() {
        console.log("Veiculo está acelerando")
    }
}

class Carro extends Veiculo {
    acelerar() {
        console.log("Carro está acelerando")
    }
}

class Moto extends Veiculo {
    acelerar() {
        console.log("Moto está acelerando")
    }
}

const carro = new Carro()
const moto = new Moto()

carro.acelerar()
moto.acelerar()