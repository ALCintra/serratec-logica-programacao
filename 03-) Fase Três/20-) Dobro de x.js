
/*
Requisitos
- Nome: 20-) Dobro de x

==> pedir um número
==> Calcular *2 deste número
==>  Console: "O dobro de x foi y."
Dica: Utilize uma variável nova para armazenar o resultado. 


*/

const prompt = require("prompt-sync")();

var pedirNum = prompt("Digite aqui um número de sua preferência: ");
var dobrarNum = pedirNum * 2


console.log("O dobro de", dobrarNum, "foi", pedirNum);
