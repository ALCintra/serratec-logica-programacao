
/*
Requisitos

- Nome: 25-) Ver seus pontos
- Consulta saldo de Pontos
- Digitar número inteiro correspondente cupons
- 01 cupom = 01 ponto

"Digite seus cupons: 12"
"De acordo com seus cupons, você tem 12 pontos no Programa de Fidelidade!"


*/

const prompt = require("prompt-sync")();

console.log("Você tem 12 cupons");

var totalcupons = prompt("Digite seus cupons: ");

console.log("Você tem 12 cupons");
console.log("De acordo com seus cupons, você tem", totalcupons, "pontos no Programa de Fidelidade!");