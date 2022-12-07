

var n = parseInt(prompt());

var a = 0 ;
var g = 0;
var d = 0;

//nao precisa ser for pq a repetição é infinita enquanto nao for digitado 4 !!!
while( n != 4 ) {
    if( n == 1 ) {
        a++;

    }

    if( n == 2 ){
        g++;
    }

    if( n == 3 ) {
        d++;
    }
    A = parseInt(prompt());
}
console.log("MUITO OBRIGADO");

console.log("Alcool: "+a);
console.log("Gasolina: "+g);
console.log("Diesel: "+d);