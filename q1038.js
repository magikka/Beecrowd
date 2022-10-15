/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item.
A seguir, calcule e mostre o valor da conta a pagar.

1 cachorro quente 4.00
2 x salada 4.50
3 x bacon 5.00
4 torrada simples 2.00
5 refri 1.50

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.*/

var [item, quant] =  prompt().split(" ");  

item = parseInt(item);
quant = parseInt(quant);
var valor = 0

if (item == 1){
    var valor = quant * 4.00;
    console.log("Total: R$ "+valor.toFixed(2));
}

if (item == 2){
    var valor = quant * 4.50;
    console.log("Total: R$ "+valor.toFixed(2));
}

if (item == 3){
    var valor = quant * 5.00;
    console.log("Total: R$ "+valor.toFixed(2));
}

if (item == 4){
    var valor = quant * 2.00;
    console.log("Total: R$ "+valor.toFixed(2));
}

if (item == 5){
    var valor = quant * 1.50;
    console.log("Total: R$ "+valor.toFixed(2));
}





