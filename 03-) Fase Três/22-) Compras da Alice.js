

/*

Requisitos:

- Nome: Compras_Alice
- Jogos: R$ 345,00 
- Video Game: R$ 1545,00
****  Lembrar de usar ponto ao invés de vírgula ****
- Forma de Pagamento: 3x S/Juros - 5x s/juros - 10x s/juros
- Apresentar forma de Pagamento

Dica: 

*/

var prompt = require("prompt-sync")();


var jogos = 345
var videogame = 1545

console.log("Alice efetuou duas compras em nossa loja de eletrônicos:");
console.log("Comprou um video Game por R$",videogame,"e comprou alguns jogos por R$", jogos,".");


var jogosEvideogame = 345 + 1545

var tresvezes = jogosEvideogame / 3
var cincovezes = jogosEvideogame / 5
var dezvezes = (jogosEvideogame * 1.05) / 10

/*
console.log(jogosEvideogame);
console.log(tresvezes);
console.log(cincovezes);
console.log(dezvezes);
*/

console.log("O valor total foi: R$",jogosEvideogame,".");
console.log("O sistema informou que Alice poderia pagar em 3 formas diferentes:");
console.log("Em 03 Parcelas sem Juros de R$:",tresvezes,".");
console.log("Em 05 Parcelas sem Juros de R$:",cincovezes,".");
console.log("Em 10 Parcelas sem Juros de R$:",dezvezes,".");
console.log("Qual será a forma de pagamento da Alice?");



