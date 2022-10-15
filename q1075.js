var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function (texto){return lines.shift();};

var cont = 0;
var n = parseInt(prompt());

for (i = 1 ; i <=10000 ; i++){
	if (i % n == 2){
		console.log(i);
	}
}



LG:
cont = 0
ler n
for ( i = 1 ; i <=1000 ; i++){
	if (i % n == 2){
		console.log(i);
	}
}