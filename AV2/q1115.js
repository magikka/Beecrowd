/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};*/

var i = 1;

while (i != 0){

    var [x, y] = prompt().split(" ");
        
    if (x == 0 || y == 0){

        i = 0;
    }else {
        if (x > 0 && y > 0){
            console.log('primeiro'); 
        }
            
        if (x < 0 && y > 0){
            console.log('segundo');
        }
            
        if (x < 0 && y < 0){
            console.log('terceiro');
        }
        
        if (x > 0 && y < 0){
            console.log('quarto');
        }

        i++;
    }
}
