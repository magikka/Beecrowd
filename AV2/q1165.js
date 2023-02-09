/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};*/
 
var n = parseInt(prompt());

for ( var i = 0; i < n; i++){ 
    var x = parseInt(prompt()); 
    var y = 1; 
    while(y < x - 1){ 
        y++; 
        var r = x %y; 
        if(r == 0){ 
            console.log(x+' nao eh primo'); 
            break;
        }
    } 
    if(r != 0){
        console.log(x+' eh primo');
    }
}
