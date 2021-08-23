

/*
Requisito:
Nome --> Tempo de Vida:
Soma idade todos colegas do grupo de Squad inclusive minha
Fazer uma variável inteira com a soma das idades

*/

var prompt = require("prompt-sync")();

//Idades colegas do grupo:

var andre = 44;
var rafael = 21;
var vanderson = 19; 
var nuria = 29;
var karina = 19;
var bruno = 32;

var somaIdades = andre + rafael + vanderson + nuria + karina + bruno;

console.log ("O valor total da soma do Squad 05 é:" , somaIdades);