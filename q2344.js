/*Entrada
A entrada contém um único conjunto de testes, que deve ser lido do dispositivo de entrada padrão
(normalmente o teclado). A entrada contém uma única linha com um número inteiro N (0 ≤ N ≤ 100),
representando uma nota de prova no sistema numérico.

Saída
Seu programa deve imprimir, na saída padrão, uma letra (A, B, C, D, ou E em maiúsculas) representando
o conceito correspondente à nota dada na entrada.

0        e
1 a 35   d
36 a 60  c
61 a 85  b
86 a 100 a

*/

var nota = parseInt(prompt());
var nota = parseInt(nota);

if (nota == 0){
    console.log("E");
}

if ( nota >= 1 && nota <= 35){
    console.log("D");
}

if ( nota > 35 && nota <= 60){
    console.log("C");
}

if ( nota > 60 && nota <= 85){
    console.log("B");
}

if ( nota > 85 && nota <= 100){
    console.log("A");
}