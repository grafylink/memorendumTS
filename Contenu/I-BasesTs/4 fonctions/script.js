"use strict";
// Dans les fonctions, de manière native en TS les paramètres doivent être typé pour éviter l'erreur.
// Cette exigence peut $etre désactivée dans tsconfig en mettant sous la ligne type checkint la ligne strict : true en commentaire.
// C'est toutefois déconseillé. 
function multiply(nbr1, nbr2) {
    return nbr1 * nbr2;
}
console.log(multiply(3, 5));
//Dans cette fonction je choisi de mettre des options et des valeurs par défaut
// le ? permet de rendre facultatif un paramètre
function diviser(nbr1, nbre2 = 2, action) {
    return nbr1 / nbre2;
}
//sans le paramètre ? la valeur devra être obligatoirement renseigné
console.log(diviser(10));
// le type fonction existe aussi, il doit s'ecrire avec un F majuscule
let faa;
faa = () => { };
// Il est possible de faire une signature de fonction : Function signatures (un modele)
//Function signatures
let baz;
baz = (a, b) => a + b;
//si je rajouter un paramètre il sera refusé car la signature de function ne le permet pas :
// baz = (a,b, c) => a+b+c induira une erreur
//  LES FONCTIONS CALLBACK
function greetings(fn) {
    fn("Hello world");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
