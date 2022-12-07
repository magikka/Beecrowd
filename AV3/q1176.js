
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

prompt = function(texto){return lines.shift();};
var T = parseInt(prompt());

var fib = [];
var term1 = 0;
var term2 = 1;

fib.push(term1,term2);

for (var i = 0; i < T; i++) {
    var x = parseInt(prompt());
    for (var y = 0; y < x; y++) {
        var soma = term1 + term2;
        fib.push(soma);
        term1 = term2;
        term2 = soma;
    }
    console.log('Fib('+x+') = '+fib[x]);
}