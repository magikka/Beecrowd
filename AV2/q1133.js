/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};*/
 
var n1 = parseInt(prompt());
var n2 = parseInt(prompt());

if ( n2 > n1 ) {
    var aux = n2;

    n2 = n1;
    n1 = aux;
    //assim n1 vai ser sempre o maior valor
}

while( n2 < n1 ) {  
    n2++;

    if( n2 % 5 == 2 || n2 % 5 == 3 ) {
        console.log(n2);
    }
}
