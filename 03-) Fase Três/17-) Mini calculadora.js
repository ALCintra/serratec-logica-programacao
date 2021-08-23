

/*
Requisitos:

- Nome: Mini Calculadora
- Quando ler 02 números inteiros, apresenta (soma) (multiplicação) (divisão) com eles
Dica:
digitar número 01
digitar número 02


*/


var prompt = require("prompt-sync")();

/*
console.log("Olá, sou sua Mini Calculadora que realiza operações com apenas dois números inteiros indicados por você...");
console.log("Após de você me informar dois números inteiros aleatórios, eu lhe informarei a soma, a multiplicação e a divisão entre eles.");
console.log("Vamos começar?");
*/

var num01 = prompt ("Digite o primeiro número inteiro: ");
var num02 = prompt ("Digite o segundo número inteiro: ");

var soma = num01 + num02 
console.log(soma);



/*
var resultadoSoma = (num01)++ (num02)

console.log(resul    tadoSoma);

//console.log("A soma dos números" , numero01, "e", numero02, "é:", soma,"." );


*/
