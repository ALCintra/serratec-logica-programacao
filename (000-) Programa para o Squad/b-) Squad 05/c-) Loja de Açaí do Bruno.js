

/* 
Requisitos:
- Nome: c-) Loja de Açaí do Bruno
- Escolher seu copo: a-) 300 ml  b-) 400 ml  c-) 700 ml 
- Escolher coberturas: 01-) Banana   02-) Granola  03-) Leite em pó
- Preço Final (?)

 */


var prompt = require("prompt-sync")();
//-----------------------------------------------------------------------------------



console.log("Olá, seja Bem vindo a Loja de Açaí do Bruno");
var pergunta01 = prompt("Vamos iniciar seu pedido? (Press Enter)");
console.log("                               ");

//-----------------------------------------------------------------------------------

console.log("Primeiro você escolhe o tamanho do seu copo.");
console.log("Digite 1: 300 ml\nDigite 2: 400 ml\nDigite 3: 700 ml");
var escolherTamCopo = prompt("Qual sua opção? ");
console.log("                               ");
//-----------------------------------------------------------------------------------

var escolherCobertura = prompt("Vamos incrementar seu Acaí!!!  (Press Enter)"); 
console.log("Digite 1: Banana\nDigite 2: Granola\nDigite 3: Leite em Pó");
var suaOpcao = prompt("Qual sua opção? ");
console.log("                               ");
//-----------------------------------------------------------------------------------



var opcaoCopo = escolherTamCopo 
var incremento = escolherCobertura;

var copoPeq = 2.00;
var copomed = 3.00;
var copogde = 4.00;

var precoIncremento = 2.00;

var opcao1 = opcaoCopo == 1 && incremento == "";
var opcao2 = opcaoCopo == 2 && incremento == "";
var opcao3 = opcaoCopo == 3 && incremento == "";


//-----------------------------------------------------------------------------------


if (opcao1) 
{
  valorFinal = copoPeq + precoIncremento;
  console.log("Total R$" + valorFinal);
} 
else if (opcao2) 
{
  valorFinal = copomed + precoIncremento;
  console.log("O valor do seu açai ficou em: R$" + valorFinal);
} 
else if (opcao3) 
{
  resultado = copogde + precoIncremento;
  console.log("O valor do seu açai ficou em: R$" + valorFinal);
}