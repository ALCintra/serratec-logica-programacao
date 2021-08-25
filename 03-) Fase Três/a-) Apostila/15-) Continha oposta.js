
/*

Requisitos:

- Nome do programa: Continha oposta
- Digitar um número
- Número digitado vira com valor negativo. Ex.: 1 = -1
Dica: Para transformar, multiplique por -1.

*/

var prompt = require("prompt-sync")();


console.log("O objetivo deste jogo é transforrmar o número positivo em sua forma negativa.");

var numeroQualquer = prompt ("Digite qualquer número positivo: ");

var multiplicando = numeroQualquer * -1

var resultado = multiplicando

console.log("O oposto deste número é:", multiplicando);


