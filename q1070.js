


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function (texto){return lines.shift();};

var x = parseInt(prompt());

if ( x % 2 == 0 ){
	x++;
}

for ( var i = 1 ; i <= 6 ; i++){
    console.log(x);
    x+=2;
}


