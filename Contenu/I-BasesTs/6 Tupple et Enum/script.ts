// Tuple : tableaux avec une longneur définie et un type défini pour chaque tableau
let mytuple : [boolean, number]
// ce tableau sera de seulement deux éléments avec pour le premier un boolean et le second un number
mytuple = [false, 26];
// tuple = [26, false]; induira une erreur.
// !!!!! Attention le défaut de ce typage n'empêche pas un push d'autres valeurs comme tuple.push(4);!!!!!


// Enum
//Cas classique d'utilisation des Enum en JavaScript classique
// const Roles = {
//     JAVASCRIPT: 1,
//     css: 2,
//     react: 3,
// }
// console.log(Roles.JAVASCRIPT);

// Avec TypeScript :
enum Roles {JAVASCRIPT, CSS, REACT} //Cration d'un objet avec indice implicite 0, 1, 2, 3...
// je peux choisir à quel n° cela démarre : enum Roles {JAVASCRIPT = 2, CSS, REACT}
console.log(Roles); //je n'ai plus qu'à afficher dans la console pour obtenir le nbre associé


