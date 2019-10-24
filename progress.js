/*var score=0;
var compteur= 1;


function ajouter(){

    score = score + compteur;
    document.getElementById("nb").innerHTML = score;


}*/

var score = 0;
var width = 0;
var click = 20;
var widthmin = 0;
var elem = document.getElementById("myBar");
var widthmax = document.getElementById("myProgress").getBoundingClientRect().width;
console.log(widthmax);


function ajouter(){

    
     setInterval(function(){

     width = width + click;
     
     elem.style.width = width + "%";
     
     
      if (width >= widthmax){
width = 0;

      	 elem.width = widthmin + "%";
         click = click - click * 8/10;
      	 } 

     },100)

              console.log(width);
    }

 