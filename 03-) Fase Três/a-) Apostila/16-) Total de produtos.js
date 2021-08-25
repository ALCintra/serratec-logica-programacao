/*

Requisitos:

- Nome: Total de Produtos
- Cliente digita quantidade produtos quer comprar
- Exibir mensagem: Parabéns por comprar "x" produtos

*/

var prompt = require("prompt-sync")();

console.log("Seja bem vindo a nossa Loja de Camisas Virtual...");
console.log("Todas as camisas são brancas e exatamente do seu tamanho.");

var qtosprodutos = prompt("Quantas camisas você pretende comprar hoje? ");

console.log("Parabéns por comprar", qtosprodutos ,"produtos!  Volte sempre.");