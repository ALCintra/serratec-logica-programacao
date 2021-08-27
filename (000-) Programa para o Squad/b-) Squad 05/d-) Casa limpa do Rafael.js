
/*

Requisitos:

- Nome: d-) Casa limpa do Rafael
- Escolher cômodo da casa:
  Quarto / Sala / Cozinha / Banheiro
- Saber se cada cômodo está limpo (S ou N)
- Exibindo mensagens no console




*/

const prompt = require('prompt-sync')();

//console
console.log("Hoje iremos limpar a casa do Rafael!");
console.log("Nesta casa temos:\n Uma Sala\n Um Quarto\n Uma Cozinha\n Um Banheiro"); 

//Sala
console.log("Vamos começar pela sala:");

var sala = prompt("A Sala está limpa?  Digite S ou N: ");

if (sala == "S") {
    console.log("Então vamos para o próximo cômodo...");
}
else { 
    console.log("Só volte aqui quando terminar para começar outro cômodo!!!");
    var qdoTerminar = prompt('Pressione "Enter" SOMENTE quando terminar...');
}


//Quarto

var quarto = prompt("O quarto está limpa?  Digite S ou N: ");
if (quarto == "S") {
    console.log("Então vamos para o próximo cômodo...");
}
else { 
    console.log("Só volte aqui quando terminar para começar outro cômodo!!!");
    var qdoTerminar = prompt('Pressione "Enter" SOMENTE quando terminar...');
}


//Cozinha

var cozinha = prompt("A cozinha está limpa?  Digite S ou N: ");
if (cozinha == "S") {
    console.log("Então vamos para o próximo cômodo...");
}
else { 
    console.log("Só volte aqui quando terminar para começar outro cômodo!!!");
    var qdoTerminar = prompt('Pressione "Enter" SOMENTE quando terminar...');
}


//Banheiro

var banheiro = prompt("O banheiro está limpa?  Digite S ou N: ");
if (banheiro == "S") {
    console.log("Então vamos para o próximo cômodo...");
}
else { 
    console.log("Só volte aqui quando terminar para começar outro cômodo!!!");
    var qdoTerminar = prompt('Pressione "Enter" SOMENTE quando terminar...');
}


//Terminou Tudo

var termnouTudo = prompt("Terminou de limpar todos os cômodos?  Digite S ou N: ");
if (termnouTudo == "S") {
    console.log("Parabéns, pode ir embora.");
}
else { 
    console.log("Só volte aqui quando terminar de limpar todoa oa cômodos.");
    var qdoTerminar = prompt('Pressione "Enter" SOMENTE quando terminar...');
}


