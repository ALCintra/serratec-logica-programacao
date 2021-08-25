
/* 
Requisitos

- Nome: 19-) Bet mais
==> cada amigo do squad lhe fale um número entre 1 e 10. 
==> criar uma variável e atribuir nela os valores
==> Ordem: Pares são somados
           Ímpares subtraídos

        */

const prompt = require("prompt-sync")();

var amigo01 = 2
var amigo02 = 6
var amigo03 = 4
var amigo04 = 3
var amigo05 = 1

var pares = amigo01 + amigo02 + amigo03
var impares = amigo04 - amigo05
var total = pares - impares

console.log("Temos como resultado desta aposta do Bet Mais, o valor de:", total);