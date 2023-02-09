/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};*/

var A = parseFloat(prompt());
var B = parseFloat(prompt());

while(A > 10 || A < 0) {
    console.log("nota invalida");
    A = parseFloat(prompt());
}

while(B > 10 || B < 0) {
    console.log("nota invalida");
    B = parseFloat(prompt());
}

var media = (A + B)/2;
console.log('media = '+media);
