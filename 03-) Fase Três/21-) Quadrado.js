
/*
Requisito
- Nome: 21-) Quadrado
 - Valor da questão anterior 12
 - Calcular número digitado
 
 */

const prompt = require("prompt-sync")();



console.log("O resultado da questão anterior foi: 12.");
var questaoAnterior = prompt("Digite o resultado da questão anterior:");

var vezesEleMesmo = questaoAnterior * questaoAnterior;

console.log("Resposta desta questão:");
console.log("O quadrado de",questaoAnterior," foi ",vezesEleMesmo);