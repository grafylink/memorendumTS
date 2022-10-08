// je peux spécifier chaque type de valeur et ne pourrait que modifier avec des types identiques
let myname = "sam";
let num = 5;
let array = [];
let obj = {};
let toogle= true;
// je peux déclarer un valeur sans lui attribuer un type et ainsi donner le champ libre sur le choix et la modification
let anything;
anything = "sam";
anything= 3;
//  On doit aussi spécifier les typages dans les fonctions
const conversion = (celsius : number) =>{
    return (celsius *9/5) + 32;
}
console.log(conversion(50));