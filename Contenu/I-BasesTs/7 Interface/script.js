"use strict";
// Les Interfaces
// Les interfaces ressemblent bcp aux types personnalisés.
// Les interfaces sont utilisés avec les class
class RocketFactory {
    constructor(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    ;
    takeOff(action) {
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12, 900, 2, 9000);
console.log(Falcon1);
Falcon1.takeOff("Décollage");
