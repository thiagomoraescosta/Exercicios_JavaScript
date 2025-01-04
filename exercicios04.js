//Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
let nomeCompleto = "Thiago Moraes";
console.log(nomeCompleto.slice(0,6));

//Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
let texto = ("Java é uma liguagem de programação.");
if(texto.includes("Java")) {
    console.log("A string contém a palavra Java")
} else {
    console.log("A strong não contém a palavra Java")
};

// Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
let cidade = " são paulo ";
console.log(cidade.trim().toUpperCase());

//Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
let palavras = "Houve um erro no sistema.";
let novaPalavras = palavras.replace("erro", "correção");
console.log(novaPalavras);

//Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
let frase = "Eu amo JavaScript";
let palavra = frase.split(" ");

console.log(palavra[0]);
console.log(palavra[1]);
console.log(palavra[2]);

// Valide se um URL começa com `https://` e termina com `.com`.
let url = "https://programação.com";
console.log(url.startsWith("https://"));
console.log(url.endsWith(".com"));