// js way to import things
const Bag = require('./Bag');

class Passenger {

    // properties
    name;
    passportNumber;
    seatNumber;
    bags;

    // constructor
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        // empty array for bag
        this.bags = [];
    }

    // stack data structure method. push adds a new element to the array (empty in this case)
    addBag(Bag) {
        this.bags.push(Bag);
    }
}

module.exports=Passenger;
// Declare a new passenger
const akua = new Passenger('Akua', "P12345", "1A" );

// Declare bag weight
const akuaBag = new Bag(39);
const akuaHandLuggage = new Bag(10);

// add bags
akua.addBag(akuaBag);
akua.addBag(akuaHandLuggage);

// log result
console.log(akua.bags);
