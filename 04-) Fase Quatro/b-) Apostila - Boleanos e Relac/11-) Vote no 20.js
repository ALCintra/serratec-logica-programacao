
/* 
Requisitos
- Nome: 11-) Vote no 20

No programa “Vote no 20”, após solicitar a idade, 
o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 

- Saída ==> === ELEIÇOES 2022 ===
            Digite sua idade: 17
            Você já pode votar? true

*/

var prompt = require("prompt-sync")();

console.log("=== ELEIÇOES 2022 ===");

var VerificarIdade = prompt("   Digite sua idade: ");

RespostaFinal = VerificarIdade >= 16;

console.log("Você já pode votar? " + RespostaFinal);

