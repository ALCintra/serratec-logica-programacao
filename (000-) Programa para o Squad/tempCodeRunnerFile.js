

/*
Requisitos:
Este é um programa para descobrir a idade da pessoa e se esta pessoa é bonita. 
Baseado em informações digitadas, a pessoa receberá resposta sobre sua idade e se é bonita. 
*/


var prompt = require("prompt-sync")();


console.log("---------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------");
console.log("Olá!!! Seja bem vindo!");
console.log("Possuo Inteligência Artificial e, com meus conhecimentos poderei dizer mais sobre você.");
console.log("Responda por sua conta e risco!");

console.log("---------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------");

console.log("Pergunta 01:");
var perg01Nome = prompt("Qual é o seu nome? ");

console.log("---------------------------------------------------------------------------------------");

console.log("Pergunta 02:");
var perg02AnoNasc = prompt("Em que ano você nasceu? " );

console.log("---------------------------------------------------------------------------------------");

var anoAtual = 2021;
var calculoDaIdade = anoAtual - perg02AnoNasc;
var RespostaIdade = calculoDaIdade;
var bonita = RespostaIdade;
var pessoabonita = RespostaIdade >= 20 && RespostaIdade <= 30;


if(pessoabonita){
    console.log(perg01Nome, "(...)" , "Através de uma profunda análise em meus Dados Quânticos...  Fui capaz de descobrir a sua idade!!!");
    console.log("Você tem:" , RespostaIdade , "anos.");

    var pressEnter = prompt("Para continuar, digite 'Enter'"); 

    
    console.log("---------------------------------------------------------------------------------------");

    
    console.log("Calculei que, pela maneira que digitou suas respostas...");
    console.log("Que você é uma pessoa bonita em vários aspectos além do atributo 'Beleza'");

    

    console.log ("Parabéns " +perg01Nome+ "!!!");
    console.log("---------------------------------------------------------------------------------------");
    console.log("---------------------------------------------------------------------------------------");

}
else{
    console.log(perg01Nome, "(...)" , "Através de uma profunda análise em meus Dados Quânticos...  Fui capaz de descobrir a sua idade!!!");
    console.log("Você tem:" , RespostaIdade , "anos.");

    var pressEnter = prompt("Para continuar, digite 'Enter'"); 

    console.log("---------------------------------------------------------------------------------------");

    console.log("Comparando você com cada habitante da Terra...");
    console.log("Calculei que, pela maneira que digitou suas respostas...");

    var pressEnter = prompt("Para continuar, digite 'Enter'");

    console.log("---------------------------------------------------------------------------------------");

    
    console.log("Você, infelizmente não é uma pessoa 100% bonita.");
    console.log (perg01Nome,"(...) Faça uma análise em seu interior, reveja seus conceitos e a maneira de ver a vida.");
    console.log("---------------------------------------------------------------------------------------");
    console.log("---------------------------------------------------------------------------------------");
   
}