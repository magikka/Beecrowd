/*Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode
ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação
de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido.
Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.*/

valor = 2500;

var n100 = parseInt(valor/100);
var n50 = parseInt((valor -n100*100)/50);
var n20 = parseInt((valor - n100*100 - n50*50)/20);
var n10 = parseInt((valor - n20*20 - n100*100 - n50*50)/10);
var n5 = parseInt((valor - n10*10 - n100*100 - n50*50 - n20*20)/5);
var n2 = parseInt((valor - n5*5 - n10*10 - n100*100 - n50*50 - n20*20)/2);
var n1 = (valor - n2*2 - n5*5 - n10*10 - n100*100 - n50*50 - n20*20);

console.log(valor);

console.log(n100+" nota(s) de R$ 100,00");
console.log(n50+" nota(s) de R$ 50,00");
console.log(n20+" nota(s) de R$ 20,00");
console.log(n10+" nota(s) de R$ 10,00");
console.log(n5+" nota(s) de R$ 5,00");
console.log(n2+" nota(s) de R$ 2,00");
console.log(n1+" nota(s) de R$ 1,00");