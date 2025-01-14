//Crie uma classe `Funcionario` com um método `calcularSalario`. Implemente subclasses como `Desenvolvedor` e `Gerente` que sobrescrevem esse método.
class Funcionario {
    calcularSalario() {
        console.log("Calcular salário genérioco.");
    }
}

class Desenvolvedor extends Funcionario {
    calcularSalario() {
        console.log("Calcular salário do Desenvolvedor.");
    }
}

class Gerente extends Funcionario {
    calcularSalario() {
        console.log("Calcular salário do Gerente.");
    }
}

const desenvolvedor1 = new Desenvolvedor();
const gerente1 = new Gerente();

desenvolvedor1.calcularSalario();
gerente1.calcularSalario();

//Implemente uma classe `Transporte` e subclasses como `Carro`, `Avião` e `Barco`, cada uma com seu método `mover`.
class Transporte {
    mover() {
        console.log("Transporte genérico.");
    }
}

class Carro extends Transporte {
    mover() {
        console.log("\nVeículo de transpote terrestre.");
    }
}

class Aviao extends Transporte {
    mover() {
        console.log("Veículo de transpote aéreo.");
    }
}

class Barco extends Transporte {
    mover() {
        console.log("Veículo de transpote aquático.");
    }
}

const fusca = new Carro();
const jato = new Aviao();
const lancha = new Barco();
fusca.mover();
jato.mover();
lancha.mover();

//Crie uma superclasse `Documento` com um método `exibirConteudo`, e subclasses como `PDF` e `Word` que personalizem esse método.
class Documento {
    exibirConteudo() {
        console.log("Esse documento está no formato genérico.");
    }
}

class Pdf extends Documento {
    exibirConteudo() {
        console.log("Esse documento está no formato PDF.");
    }
}

class Word extends Documento {
    exibirConteudo() {
        console.log("\nEsse documento está no formato Word.");
    }
}

const formulario = new Word();
const livro = new Pdf();
formulario.exibirConteudo();
livro.exibirConteudo();

//Implemente um sistema de animais com uma superclasse `Animal` e métodos específicos em subclasses como `Passaro` e `Peixe`.
class Animal {
    locomover() {
        console.log("O animal se locomove.");
        
    }
}

class Passaro extends Animal {
    locomover() {
        console.log("\nO animal se locomove voando.");
    }
}

class Peixe extends Animal {
    locomover() {
        console.log("O animal se locomove nadando.");
    }
}

const gaviao = new Passaro();
const nemo = new Peixe();
gaviao.locomover();
nemo.locomover();

//Use o polimorfismo para criar uma lista de diferentes formas geométricas (`Quadrado`, `Círculo`, etc.) e calcule suas áreas.
class Forma {
    calcularArea() {
        console.log("Área da forma genérica.")
    }
}

class Quadrado extends Forma {
   constructor(lado) {
    super();
    this.lado = lado;
   }

   calcularArea() {
    console.log(`\nÁrea do quadrado: ${this.lado * this.lado}`);
    
   }
}

class Circulo extends Forma {
    constructor(raio) {
        super()
        this.raio = raio;
    }

    calcularArea() {
        console.log(`Área do circulo: ${Math.PI * this.raio **2}`)
    }
}

class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        console.log(`Área do triângulo: ${(this.base * this.altura)/2}`)
    }
}

const formas = [new Quadrado(4), new Circulo(3), new Triangulo(5,4)];

formas.forEach(forma => forma.calcularArea());