// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let heureNow = new Date().toLocaleTimeString('fr');


//Stocker l'heure , minute , seconde  dans des varaiables
let heureDecompose = heureNow.split(':');
let hour = heureDecompose[0];
let minute = heureDecompose[1];
let seconde = heureDecompose[2];

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
const secondDeg = seconde * 6;
const minuteDeg = minute * 6 ;
const hourDeg = hour * 30 + (minute/2);

// Déplacer les aiguilles 
function demarrerLaMontre() {

    const AIGUILLEHR = document.querySelector("#hour");
    const AIGUILLEMIN = document.querySelector("#minute");
    const AIGUILLESEC = document.querySelector("#second");
    
    let heureNow = new Date();

    let hour = heureNow.getHours();
    let minute = heureNow.getMinutes();
    let seconde = heureNow.getSeconds();
    
    let secondDeg = seconde * 6;
    let minuteDeg = minute * 6 ;
    let hourDeg = hour * 30 + Math.floor(minute/12) * 6;

    AIGUILLESEC.style.transform = 'rotate(' + secondDeg + 'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + minuteDeg + 'deg)';
    AIGUILLEHR.style.transform = 'rotate(' + hourDeg + 'deg)';
}
// Exercuter la fonction chaque second
demarrerLaMontre();
var interval = setInterval(demarrerLaMontre, 1000);
