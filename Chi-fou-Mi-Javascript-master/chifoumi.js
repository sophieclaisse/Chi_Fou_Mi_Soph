
var choixUtilisateur= 0;




document.getElementById("feuille").addEventListener("click", function () {
    choixUtilisateur= 1;
    var choixOrdinateur = (Math.random()*3)+1;
    choixOrdinateur= Math.floor(choixOrdinateur);
    document.getElementById("ChoixF").innerHTML= "Vous avez choisi feuille";


    if (choixOrdinateur==1){
        document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi feuille";
        alert("Match Nul!")  ;
    }
    if (choixOrdinateur==2){
        document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi pierre";
        alert ("You win!")  ;
    }
    if (choixOrdinateur==3){
        document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi ciseaux";
        alert ("You loose!");
    }
});


document.getElementById("pierre").addEventListener("click", function () {
   choixUtilisateur= 2;
   var choixOrdinateur = (Math.random()*3)+1;
   choixOrdinateur= Math.floor(choixOrdinateur);
   document.getElementById("ChoixF").innerHTML= "Vous avez choisi pierre";

 if (choixOrdinateur==1){
       document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi feuille";
       alert("You loose!")  ;
   }
   if (choixOrdinateur==2){
       document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi pierre";
       alert ("Match Nul!")  ;
   }
   if (choixOrdinateur==3){
       document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi ciseaux";
       alert ("You Win!");
    }
});

document.getElementById("ciseaux").addEventListener("click", function () {
    choixUtilisateur= 3;
    var choixOrdinateur = (Math.random()*3)+1;
    choixOrdinateur= Math.floor(choixOrdinateur);
    document.getElementById("ChoixF").innerHTML= "Vous avez choisi ciseaux";

    if (choixOrdinateur==1){
        document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi feuille";
        alert("You Win!")  ;
    }
    if (choixOrdinateur==2){
        document.getElementById("ChoixG").innerHTML= "l'ordinateur a choisi pierre";
        alert ("You loose!")  ;
    }
    if (choixOrdinateur==3) {
        document.getElementById("ChoixG").innerHTML = "l'ordinateur a choisi ciseaux";
        alert("Match Nul!");
    }
});




