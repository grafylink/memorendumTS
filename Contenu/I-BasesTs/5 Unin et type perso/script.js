"use strict";
// Il est possible de marier des types afin de permettre à un parametre différents choix de typage
let code;
code = 4;
code = "cinq";
// autre exemple
let anniversaire;
anniversaire = "a fêter";
anniversaire = {
    jour: "mercredi",
    access: true
};
//cas d'un tableau union de boolean et number, convention d'écriture avec des parenthèses
let arr;
arr = [true, false, 12];
// Dans les fonctions 
const myfunc = (param) => {
    console.log(param);
};
myfunc('Test');
myfunc(3);
const blaz = (param) => {
    console.log(param);
};
blaz("mon bon blaz");
const button = {
    x: 99,
    y: 120,
    id: "A2321",
    visible: true
};
