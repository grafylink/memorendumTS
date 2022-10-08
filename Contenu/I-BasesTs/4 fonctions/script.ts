// Dans les fonctions, de manière native en TS les paramètres doivent être typé pour éviter l'erreur.
// Cette exigence peut $etre désactivée dans tsconfig en mettant sous la ligne type checkint la ligne strict : true en commentaire.
// C'est toutefois déconseillé. 

function multiply(nbr1:number, nbr2:number) {
    return nbr1 * nbr2;
}
console.log(multiply(3, 5));

//Dans cette fonction je choisi de mettre des options et des valeurs par défaut
// le ? permet de rendre facultatif un paramètre
function diviser(nbr1:number, nbre2 = 2, action? : string) {
    return nbr1 / nbre2;
}

//sans le paramètre ? la valeur devra être obligatoirement renseigné
console.log(diviser(10));


// le type fonction existe aussi, il doit s'ecrire avec un F majuscule

let faa : Function;

faa = ()=>{ };

// Il est possible de faire une signature de fonction : Function signatures (un modele)
//Function signatures
let baz: (a:number, b:number) => number;

baz = (a,b) => a+b;
//si je rajouter un paramètre il sera refusé car la signature de function ne le permet pas :
// baz = (a,b, c) => a+b+c induira une erreur

//  LES FONCTIONS CALLBACK

function greetings(fn: (a:string) => void){
    fn("Hello world")
} 

function printToConsole(msg:string){
    console.log(msg);
}

greetings(printToConsole);
