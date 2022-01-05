// importing Passenger Class

const { type } = require('os');
const Passenger = require('./Passenger');

// properties
type;

// constructor
class Plane {
    constructor(type) {
        this.type = type;
        this.passenger = [];
    }

    // boarding method taking in Passenger and log message that they have boarded
    board(Passenger) {
        Passenger;
        this.passenger.push(Passenger);
       return Passenger;

        // changing output text if more than one person has boarded
        // if (Passenger.length > 2) {
        //      text = `${Passenger([...0]} and ${Passenger[...1]} have boarded the plane`;
        // } else {
        //      text = `${Passenger} has boarded the plane!`;
        // }
    }

    // if a passenger has missed a flight
    missedFlight(Passenger) {
        Passenger;
        this.passenger.pop(Passenger);
        return Passenger;
    }
    // display all passengers currently on plane
    displayPassengers() {
        return this.passenger;
    }

    // remove all
    removePassengers() {
        this.passenger = [];
        return this.passenger;
    }
}

module.exports=Plane;

const plane = new Plane("BA001");
plane.board("Tony");

// plane.board("Akua");
// plane.displayPassengers();
// plane.missedFlight("Akua");
// plane.displayPassengers();