var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function (texto){return lines.shift();};

var N = new Array(10);
var v = parseInt(prompt());
while(v > 50){
    var v = parseInt(prompt());
}

for(var i = 0; i < 10; i++){
    N[i] = v;
    console.log("N["+i+"] = "+v);
    v = v*2;
    
}

