var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto){return lines.shift();};

var T = parseInt(prompt());
var N = new Array(1000);
var V = 0;

for (var i = 0; i < 1000; i++) {
    N[i] = V;
    V++;
    console.log('N['+i+'] = '+N[i]);
    if (V == T) {
        V = 0;
    }
}