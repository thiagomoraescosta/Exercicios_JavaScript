// BOOLEANS

let verdadeiro = true
let falso = false

console.log(5 > 6)
console.log(6 > 5)
console.log(6 == 5)
console.log(6 <= 5)

// && = e, || = ou
// true || false =true
// true && false = false

let idade = 18
let temCarteira = false

if (temCarteira && idade >= 18) {
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}

if (temCarteira || idade >= 18) {
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}