/*var score=0;
var compteur= 1;


function ajouter(){

    score = score + compteur;
    document.getElementById("nb").innerHTML = score;


}*/

var score = 0;
var width = 0;
var click = 10;
var widthmin = 0;
var widthmax = 100;
var elem = document.getElementById("myBar");


function ajouter(){

    
     
     width = width + click;
     
     elem.style.width = width + "%";
     
     
      if (width >= widthmax){

      	 elem.style.width = widthmin + "%";
      	 width = 0;
         click = click - (100/80);

      	 } 

              console.log(width);
    }

 