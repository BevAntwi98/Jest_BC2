import Passenger from "../Passenger";

class Plane {
    type: string;
    passenger:Array<string>


    constructor(type:string, passenger: Array<string> ){
        this.type = type;
        this.passenger = [];
    }
    board(Passenger){
        Passenger;
        this.passenger.push(Passenger);
        let text = `${Passenger} has boarded the plane!`;
        console.log(text);
    }

    // if a passenger has missed a flight
    missedFlight(Passenger) {
        Passenger;
        this.passenger.pop();
        let text = `${Passenger} has not boarded and missed the flight`;
        console.log(text);
    }
     // display all passengers currently on plane
     displayPassengers() {
        console.log(this.passenger);
    }

    // remove all
    removePassengers() {
        this.passenger = [];
        console.log("all passengers have been removed");
    }
}

export=Plane;

// ERROR TO FIX
const plane = new Plane("BA001");
plane.board("Tony");
plane.board("Emilia");
plane.displayPassengers();
plane.board("Akua");
plane.displayPassengers();
plane.missedFlight("Akua");
plane.displayPassengers();