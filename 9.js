// RECURSAO

// Faça uma função, que recebe um número e conta regressivamente
// começando desse número e indo até o zero

function contarRegressivo(numero) {
    if (numero == 0) {
        console.log("Fim!")
        return
    }
    console.log(numero);
    contarRegressivo(numero - 1)
    
}
 contarRegressivo(5)