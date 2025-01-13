// ENCAPSULAMENTO E ABSTRAÇÃO

class Cofre {
    #senha

    constructor(senhaInicial) {
        this.#senha = senhaInicial
    }

    verificarSenha(senha) {
        return senha === this.#senha
    }
}
const cofre1 = new Cofre('1234')
console.log(cofre1.verificarSenha('1234'))
