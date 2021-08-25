
/*
Requisitos
 - Nome: 11-) Mais que mil

 ==> 4 primeiros múltiplos de 4 acima de mil
 ==> Somar em var

 ==> 4 primeiros números primos a partir do zero
 ==> var em numero primos

 ==> Diminuir var 1 de var 2
 */

 const prompt = require("prompt-sync")();


var somaMultiplosMil = 1004 + 1008 + 1012 + 1016;

var primosDepoisZero = 2 + 3 + 5 + 7;
var somaMenosPrimos = somaMultiplosMil - primosDepoisZero

console.log("O resultado final da subtração é:" ,somaMenosPrimos);