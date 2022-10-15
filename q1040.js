var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function (texto){return lines.shift();};

var [N1, N2, N3, N4] =  prompt().split(" ");  
var N1 = parseFloat(N1);
var N2 = parseFloat(N2);
var N3 = parseFloat(N3);
var N4 = parseFloat(N4);

var media = ((N1*2)+(N2*3)+(N3*4)+ N4)/10;

console.log("Media: "+ media.toFixed(1)); 

if (media >= 7){
    console.log("Aluno aprovado.");
}

if(media < 5){
    console.log("Aluno reprovado.");
}

if(media >= 5 && media < 7){
    console.log("Aluno em exame.");

    var exame = parseFloat(prompt("Nota do exame: "));

    console.log("Nota do exame: "+exame.toFixed(1));

    var mediaFinal = (media + exame)/2;

    if (mediaFinal >= 5){
        console.log("Aluno aprovado.");
        console.log("Media final: "+mediaFinal.toFixed(1));
    }else{
        console.log("Aluno reprovado.");
        console.log("Media final: "+mediaFinal.toFixed(1));
    }
}

