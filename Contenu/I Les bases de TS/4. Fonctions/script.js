"use strict";
function multiply(num1, num2 = 10, action) {
    if (action)
        console.log(action);
    return num1 * num2;
}
console.log(multiply(6, 10, "create"));
let foo;
foo = () => { };
// Function signatures
let baz;
baz = (a, b) => a + b;
// Callback
function greetings(fn) {
    fn("Hello World");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
