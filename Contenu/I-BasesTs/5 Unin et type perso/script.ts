// Il est possible de marier des types afin de permettre à un parametre différents choix de typage
let code : string | number;
code = 4;
code = "cinq";

// autre exemple
let anniversaire : string | number | boolean | object | Function;
anniversaire = "a fêter";
anniversaire = {
    jour: "mercredi",
    access: true
}

//cas d'un tableau union de boolean et number, convention d'écriture
let arr : (boolean|number)[]
arr = [true, false, 12];

// Dans les fonctions 
const myfunc = (param: number|string) => {
    console.log(param);
}

myfunc('Test');
myfunc(3);

// Types personnalisés ou Type Aliases. Configurer des types personnalisés.

type mixedNumstr = number | string;
type booleanOrObje = object | boolean;

const blaz = (param: mixedNumstr) => {
    console.log(param);
}

blaz("mon bon blaz");

//on peut également créer des objets (attention la syntaxe est préférable par convention cette fois çi avec point-virgule)

type element = {
    x:number; //ici la virgule ne provoquera pas d'erreur mais le point-virgule est préférable
    y: number;
    id: number|string;
    visible: boolean
}

const button : element = {
    x: 99,
    y: 120,
    id: "A2321",
    visible: true
} 