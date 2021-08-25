

/*
Requisitos:
- Nome do Programa:  Termômetro
- Colocar temperatura em Celsus e transformar em Fareinheit

*/

var prompt = require("prompt-sync")();

//entrada
//formula (0 °C × 9/5) + 32 = 32 °F

var celsius = prompt ("Digite Temperatura em Celsius:");
var farenheit = (celsius * 9/5) + 32

var resultado = farenheit

console.log("Esta temperatura em Farenheit é:" , resultado);