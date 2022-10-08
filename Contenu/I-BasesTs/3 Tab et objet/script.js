"use strict";
const fruits = ['pommes', 'bananes'];
// Ce tableau indique implicitement à TS que les valeurs seront des strings.
// je ne peux donc qu'y ajouter des strings
fruits.push("fraises");
console.log(fruits);
// Il est possible de faire un tableau de type variables, mais il ne tolerera l'ajout que de types similaires :
let mixedArray = [1, 'txt', [1, 2, 3]];
mixedArray.push([2, 3]);
// tableau de nombre déclaration
let nombre;
// nombre.psuh(1) donne erreur car il s'agit d'une déclaration, il n'est pas instancié
nombre = [1, 2, 3];
let nombre2 = [];
// nombre.psuh(1) marchera dans ce cas vzr il nombe2 est déclaré et instancié
let random;
random = [2, 4, 6, true, "louche"];
/*  *********************** OBJETS ***************************** */
const car = {
    nom: "Audi",
    nbrePortes: 5,
    reservation: true
};
// Dans le cas de cet objet il est donc obligatoire de respecter le type de chaque clé valeur.
// car.nbrePortes = "cinq"; ne marchera pas.
const car1 = {
    nom: "Audi",
    nbrePortes: 5,
    reservation: true
};
car1.nbrePortes = "cinq"; // la modification sera prise en compte
// Je peux configurer le typage en daclarant l'objet (il n'acceptera que des objets)
let profile;
profile = {
    name: "sam",
    age: 25,
    //    hobbies: [] je ne peux pas ajouter une valeur supplémentaire non déclarée en amont.
};
// Autre manière de déclarer (mais pas la plus optimisée):
let user = {
    nom: "John",
    age: 25,
    favoriteFood: ["Chocolat, banane"],
    data: "tout ce que tu veux..."
};
let objt;
objt = { firstname: "sam" };
