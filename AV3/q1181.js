/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};
*/

var linha = parseInt(prompt());
var option = prompt();
var M = new Array(12);

var soma = 0;
var i = 0;

for (var iL = 0; i < 12; i++) {
    M[i] = Array (12);
    for (var j = 0; j < 12; j++) {
        M[i][j] = parseFloat(prompt());
    }
}

for (var i = 0; i < 12; i++) {
    soma = soma + M[linha][j];
    
}

if (option == 'S') {
    console.log(soma);
} else {
    console.log((soma/12).toFixed(1));
}
