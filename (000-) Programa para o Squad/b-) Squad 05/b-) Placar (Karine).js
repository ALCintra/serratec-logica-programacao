

/* 
Requisitos:
- Nome: b-) Placar (Karine)
- Um placar valendo até 7

 */ 

var prompt = require("prompt-sync")();

console.log("O jogo é simples...");
var perguntasParaParticipante = prompt("Você só tem que escolher um número que vai de 1 a 7: ");

do 
{
  var numeroEscolhido01 = perguntasParaParticipante == "5";
  var numeroEscolhodo02 = perguntasParaParticipante > "7" || perguntasParaParticipante < "1";

  if (numeroEscolhido01) 
  {
    console.log("Muito bem... Viu como é fácil?");
    console.log("Viu como é fácil?");
    console.log("Já pensou em jogar na Loteria?");
    break;
  } 
  
  else if (numeroEscolhodo02) 
  {
    console.log("Não entendeu o joguinho?");
    var perguntasParaParticipante = prompt("ESCOLHER um número DE 1 A 7... Qual sua resposta? ");
  } 
  else 
  {
    
    console.log("Vixe... Não foi desta vez... Continue tentando até conseguir...");
    var perguntasParaParticipante = prompt("Escolha um número de 1 a 7\nTente de novo: ");
  }
} 
while (!numeroEscolhido01);