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
prixauto = 200;
var prix1 = 10;
var prix2 = 20;
var prix3 = 30;
var prix4 = 40;
var prix5 = 50;
var prix6 = 60;
var prix7 = 70;
var prix8 = 80;
var prix9 = 90;
var mechant = document.getElementById("bouton");
var gentil= document.getElementById("hero");

var gif1 = document.getElementById("gif");
var gif2 = document.getElementById("gif");
var gif3 = document.getElementById("gif");
var gif4 = document.getElementById("gif");
var gif5 = document.getElementById("gif");
var gif6 = document.getElementById("gif");
var gif7 = document.getElementById("gif");
var gif8 = document.getElementById("gif");
var gif9 = document.getElementById("gif");

function ajouter(){

    
    score = score + compteur;
    document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur;

}

mechant.onclick = ajouter;
console.log(score);


function autoclicker(){

        
        if (score > prixauto){
            score = score - prixauto;
            prixauto = prixauto * 2;
            document.getElementById("auto").innerHTML ="Auto Clicker = " + prixauto + "xp";
            autoclicker = window.setInterval(ajouter,1000);

          
    }
}



/* liste des fonctions pour chaque bonus (9)*/

function incrementer1(){

    if (score >= prix1) {
    document.getElementById("affichage").innerHTML = score - prix1;
    score = score - prix1;
    compteur = compteur + 1;
    prix1 = prix1 * 2;
    gif1.style.backgroundImage=url()
    }
     
     document.getElementById("affichage").innerHTML = "Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix1;

}   



function incrementer2(){

    if (score >= prix2) {
    document.getElementById("affichage").innerHTML = score - prix2;
    score = score - prix2;
    compteur = compteur + 100;
    prix2 = prix2 * 2;
    gif2.style.backgroundImage=url()
    
    }

     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix2;
}

function incrementer3(){

    if (score >= prix3) {
    document.getElementById("affichage").innerHTML = score - prix3;
    score = score - prix3;
    compteur = compteur + 1;
    prix3 = prix3 * 2;
    gif3.style.backgroundImage="url(balai.gif)";
    
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix3;
}

function incrementer4(){

    if (score >= prix4) {
    document.getElementById("affichage").innerHTML = score - prix4;
    score = score - prix4;
    compteur = compteur + 1;
    gif4.style.display="block";
    prix4 = prix4 * 2;
    gif4.style.backgroundImage="url(tir.gif)";
    setTimeout(function(){gif4.style.display="none";}, 2000);
    
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix4;
}


function incrementer5(){

    if (score >= prix5) {
    document.getElementById("affichage").innerHTML = score - prix5;
    score = score - prix5;
    compteur = compteur + 1;
    prix5 = prix5 * 2;
    gif5.style.backgroundImage=url("bat.gif");
   
    
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix5;
}
     function incrementer6(){

    if (score >= prix6) {
    document.getElementById("affichage").innerHTML = score - prix6;
    score = score - prix6;
    compteur = compteur + 1;
    prix6 = prix6 * 2;
    gif6.style.backgroundImage=url()
    
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix6;
}
     function incrementer7(){

    if (score >= prix7) {
    document.getElementById("affichage").innerHTML = score - prix7;
    score = score - prix7;
    compteur = compteur + 1;
    prix7 = prix7 * 2;
    gif7.style.backgroundImage=url()
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix7;
}

     function incrementer8(){

    if (score >= prix8) {
    document.getElementById("affichage").innerHTML = score - prix8;
    score = score - prix8;
    compteur = compteur + 1;
    prix8 = prix8 * 2;
    gif8.style.backgroundImage=url()
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix8;

}
     function incrementer9(){

    if (score >= prix9) {
    document.getElementById("affichage").innerHTML = score - prix9;
    score = score - prix9;
    compteur = compteur + 1;
    prix9 = prix9 * 2;
    gif9.style.backgroundImage=url()
    
    }
     
     document.getElementById("affichage").innerHTML ="Experience = "+ score + " Nb de Clics x " + compteur + " Prix = " + prix9;
}

/* FIN liste des fonctions pour chaque bonus (9)*/

/*BONUS*/


 
   
function badbad1(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/jokerpioupiou.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/batpioupiou.png)";

}

function badbad2(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/mechantduggie.png)";
    mechant.style.marginTop="-90px";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/duggie.png)";
}

function badbad3(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/detraqueur.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/harry.png)";
}

function badbad4(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/jiren.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/goku.png)";
    gentil.style.marginTop="-40px";

}

function badbad5(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/sansvisage.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/haku.png)";
    gentil.style.width="650px";
}

function badbad6(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/stormtrooper.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/Chewbacca.png)";
}

function badbad7(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/trump.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/licorne.png)";
    gentil.style.width="350px";
    
}

function badbad8(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/dalek.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/drwho.png)";
    gentil.style.width="350px";
}

function badbad9(){

    mechant.style.backgroundImage="none";
    mechant.style.backgroundImage="url(./ennemis/frieza.png)";
    gentil.style.backgroundImage="none";
    gentil.style.backgroundImage="url(./heros/avatars.png)";
    gentil.style.width="550px";
}
