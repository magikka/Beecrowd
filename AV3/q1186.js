/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};*/

var M = new Array(12);
var opc = prompt();

var soma = 0;
var fix = 11;

for (var i = 0; i < 12; i++) {
    M[i] = Array (12);
    for (var j = 0; j < 12; j++) {
        M[i][j] = parseFloat(prompt());
    }
}

for (var i = 1; i < 12; i++) {
	for (var j = 11; j >= fix; j--) {
		soma += M[i][j]; 
	}
	fix--;
}

if (opc == 'S') {
	console.log(soma);
} else {
	console.log((soma/66).toFixed(1));
}
