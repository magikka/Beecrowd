var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function (texto){return lines.shift();};

var A = new Array(100);

for(var i = 0; i < 100; i++){
    var x = parseFloat(prompt());
    A[i] = x;
    if(x <= 10){
        console.log("A["+i+"] = "+A[i].toFixed(1));
    }
    
}
