/*var score=0;
var compteur= 1;


function ajouter(){

    score = score + compteur;
    document.getElementById("nb").innerHTML = score;


}*/

var xp = 0;
var score = 0;
var compteur = 10;
var widthmin = 0;
var widthmax = 100;
var elem = document.getElementById("myBar");


function ajouterbarre(){

    
     
     score = score + compteur;
     
     elem.style.width = score + "%";
     
     
      if (score >= widthmax){

      	 elem.style.width = widthmin + "%";
      	 score = 0;
         compteur = compteur - (100/80);

      	 } 

              console.log(width);
    }

 