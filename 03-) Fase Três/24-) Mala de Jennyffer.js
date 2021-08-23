

/*

Requisitos:

- Nome: 24 Combinação Fatorial
- Jenifer coloca na mala 04 calças e 08 camisas
- Quantas combinações, qtas formas diferentes sem repetir roupa?

Dica: 08 x 04

*/

var prompt = require("prompt-sync")();


console.log("Jennyffer está arrumando suas malas para o feriado.");
console.log("Por ela ser vaidosa, não gosta de repetir roupas...");
console.log("Sabemos que em sua mala tem 4 calças e 8 camisas");
console.log("Agora, responda:");


var calca = prompt ("Quantas calças Jennyfer colocou na mala? ");
var camisa = prompt("Quantas camisas Jennyfer colocou na mala? ");

var combinacoes = calca * camisa

console.log("Se Jennyffer colocou", calca, "calças e colocou", camisa, "camisas na mala, então ela terá", combinacoes, "combinações de conjuntos de roupas sem repetir neste feriado.");
