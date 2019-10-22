/*var hero1;
var hero2;
var hero3;
var hero4;
var hero5;
var hero6;
var hero7;
var hero8;
var hero9;
var bad1;
var bad2;
var bad3;
var bad4;
var bad5;
var bad6;
var bad7;
var bad8;
var bad9;
var bonus1;
var bonus2;
var bonus3;
var bonus4;
var bonus5;
var bonus6;
var bonus7;
var bonus8;
var bonus9;

action = document.getElementById("button");

paragraphe = document.getElementById("affichage");

multi = document.getElementById("multiply");

auto = document.getElementById("autoClick");

var score = 0;
var compteur = 1;
var prix = 50;
var clickerAuto = 200;
function nbDeClics() {

//cette fonction déclenche une action au clic du bouton//
    score = score + compteur;
    paragraphe.innerHTML = "Nb de clics total : " +score;
        
}

action.onclick = nbDeClics;

function incrementer(){
    compteur ++;
    score = score - prix;
    prix = prix * 2;
    multi.innerHTML = "Multiplicateur x "  +compteur+ " / Prix du prochain achat : " +prix;
    
    
    paragraphe.innerHTML = "Nb de clics total : " +score;
    
}

multi.onclick = incrementer;

function autoClicker(){

    clickerAuto = clickerAuto * 2;
    auto.innerHTML = "AutoClicker x 1 seconde / Prix du Clicker Auto : " +clickerAuto;
    setInterval(nbDeClics, 1000);
}

$auto.onclick = autoClicker;*/

var score = 0;
var compteur = 1;
var prix = 50;



function ajouter(){

    
    score = score + compteur;
    document.getElementById("affichage").innerHTML ="Experience = "+ score;

}

bouton.onclick = ajouter;


function incrementer(){

    if (score >= prix) {
    document.getElementById("affichage").innerHTML = score - prix;
    score = score - prix;
    compteur = compteur + 1;
    prix = prix * 2;
    
    }
     
     document.getElementById("multi").innerHTML = "Par " + compteur + " Prix = " + prix;
}   

function autoclicker(){

        
        if (score > 200){
            score = score - 200;
            autoclicker = window.setInterval(ajouter,1000);
          
    }
} 
   
auto.onclick = autoclicker;