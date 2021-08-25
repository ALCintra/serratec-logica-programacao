
/*
Requisitos
- Nome: 09-) Relacionais
- var A / var B
- Saida: Resultados com números digitados
- Diferente / Menor / Maior / Menor ou Igual / Maior ou Igual / Igual
- Responder True ou False

O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, 
escreve na tela o resultado de cada operação relacional com os números. 

*/

const prompt = require("prompt-sync")();


var numero01A = prompt("Digite um número inteiro para (A): ");
var numero01B = prompt("Digite um número inteiro para (B): ");

var AdiferenteB = numero01A != numero01B;
var AmenorB = numero01A < numero01B;
var AmaiorB = numero01A > numero01B;
var AmenorIgualB = numero01A <= numero01B;
var AmaiorIgualB = numero01A >= numero01B;
var AigualB = numero01A == numero01B;

console.log("-----------------------------------");
console.log("-----------------------------------");

console.log("A é diferente de B: " , AdiferenteB);

console.log("-----------------------------------");
console.log("A é menor que B: " , AmenorB);

console.log("-----------------------------------");
console.log("A é maior que B: " , AmaiorB);

console.log("-----------------------------------");
console.log("A é menor ou igual a B: " , AmenorIgualB);

console.log("-----------------------------------");
console.log("A é maior ou igual a B: " , AmaiorIgualB);

console.log("-----------------------------------");
console.log("A é igual a B: " , AigualB);

console.log("-----------------------------------");
console.log("-----------------------------------");