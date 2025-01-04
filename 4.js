// STRINGS

let nome = "Thiago";
let sobrenome = "Moraes";
let saudacao = `Olá, ${nome} ${sobrenome}`;

console.log(saudacao);

let palavra = "Programação";
console.log(palavra[1]);
console.log(palavra.length) //quantidade de letras

let frase = "Eu amo programação"
console.log(frase.slice(7,18)) // fatia a frase

let novaSaudacao = saudacao.replace("Olá", "Boa Tarde")
console.log(novaSaudacao)

let email = "contatoprogramador.com.br"
if(email.includes("@")) {
    console.log("Email válido")
} else {
    console.log("Email inválido")
}

//Verificando Começo e Fim
let site = "www.exemplo.com";
console.log(site.startsWith("www"));  // Saída: true
console.log(site.endsWith(".com"));  // Saída: true

//Formatando Texto
let nomeCompleto = "   ana silva   ";
console.log(nomeCompleto.trim().toUpperCase());  // Saída: ANA SILVA