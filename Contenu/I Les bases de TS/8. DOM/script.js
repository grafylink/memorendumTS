"use strict";
// Type Assertion
// let txt:string;
// txt = "str"
// Assertion
// const form : HTMLFormElement = document.querySelector('form')!
// console.log(form.children);
// Type Casting
const form = document.querySelector('form');
console.log(form.children);
const input = document.querySelector('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED");
}
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
const paragraphsList = document.querySelectorAll('p');
