"use strict";
// Type Assertion [forme plutôt déconseillé : necessité du point d'exclamation pour le null]
// const form : HTMLFormElement = document.querySelector('form')!
// console.log(form.children);
//Casting
const form = document.querySelector('form');
console.log(form.children);
const inp = document.querySelector('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
}
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
//il n'est pas forcément necessaire de "caster" à chaque fois
//Même si cela n'apparaitre pas en erreur si c'est le cas
const paragraphe = document.querySelectorAll('p');
//const paragraphe = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.log(paragraphe);
