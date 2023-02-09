/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};*/

var a = 1;
var b = 1;
var s = 0;

while(b < 28){
    s = s + (b/a);
    a = a * 2;
    b = b + 2;
}
console.log(s.toFixed(2));
