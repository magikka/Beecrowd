/* 
vertebrado > ave > carnivoro > aguia --------------------
                 > onivoro   > pomba ------------
                 
           >mamifero > onivoro   > homem-------------------
                     > herbivoro > vaca------------------------
*/

var tipo1 =  prompt(); 
var tipo2 = "";
var tipo3 = "";

//VERTEBRADO
if (tipo1 == "vertebrado"){
    var tipo2 = prompt();

    //AVE
    if (tipo2 == "ave"){
        var tipo3 = prompt();
        //CARNIVORO
        if (tipo3 == "carnivoro"){
            console.log("aguia"); //AGUIA
        //ONIVORO
        }else if(tipo3 == "onivoro"){
            console.log("pomba"); //POMBA
        }

    //MAMIFERO
    }else if(tipo2 == "mamifero"){
        var tipo3 = prompt();
        //ONIVORO
        if (tipo3 == "onivoro"){
            console.log("homem"); //HOMEM
        //HERBIVORO
        }else if(tipo3 == "herbivoro"){
            console.log("vaca"); //VACA
        }
    }

//INVERTEBRADO
}else if (tipo1 == "invertebrado"){
    var tipo2 = prompt();

    //INSETO
    if (tipo2 == "inseto"){
        var tipo3 = prompt();
        //HEMATOFAGO
        if (tipo3 == "hematofago"){
            console.log("pulga"); //PULGA
        //HERBIVORO
        }else if(tipo3 == "herbivoro"){
            console.log("lagarta"); //LAGARTA
        }

    //ANELIDEO
    }else if(tipo2 == "anelideo"){
        var tipo3 = prompt();
        //HEMATOFAGO
        if (tipo3 == "hematofago"){
            console.log("sanguessuga"); //SANGUESSUGA
        //ONIVORO
        }else if(tipo3 == "onivoro"){
            console.log("minhoca"); //MINHOCA
        }
    }
}
/*
invertebrado > inseto > hematofago > pulga
                      > herbivoro  > lagarta
                      
             > anelideo > hematofago > sanguessuga
                        > onivoro    > minhoca