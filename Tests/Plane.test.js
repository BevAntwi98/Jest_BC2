const Plane = require('../Plane')
const Passenger = require('../Passenger');


describe('Plane', function () {

    test('has a type', () => {
        const plane = new Plane("BA001");
        expect(plane.type).toBe("BA001");
    })

    // passenger can board
    test('passenger can board plane successfully', () => {
        this.passenger = [];

        const plane = new Plane("BA001");
        const bev = new Passenger("Bev", "P12345", "BA001");
        this.passenger.push(Passenger);
        expect.arrayContaining("Bev");

    });

    // multiple passengers can board
    test('many passengers can board successfully', () => {
        this.passenger = [];

        const plane = new Plane("BA001");
        const bev = new Passenger("Bev", "P12345", "BA001");
        const toni = new Passenger("Antonio", "P67890", "BA001");
        this.passenger.push(Passenger);
        expect.arrayContaining(["Bev", "Antonio"]);

    });

    // passengers can be displayed
    test('passengers are displayed', () => {
        this.passenger = [];

        const plane = new Plane("BA001");
        const bev = new Passenger("Bev", "P12345", "BA001");
        const toni = new Passenger("Antonio", "P67890", "BA001");
        plane.board("Bev");
        plane.board("Antonio")
        plane.displayPassengers();
        expect.arrayContaining(["Bev", "Antonio"]);

    });

    // passengers can be removed
    test('passenger(s) can be removed', () => {
        this.passenger = [];

        const plane = new Plane("BA001");
        const bev = new Passenger("Bev", "P12345", "BA001");
        const toni = new Passenger("Antonio", "P67890", "BA001");
        plane.board("Bev");
        plane.board("Antonio")
        plane.missedFlight("Antonio");
        expect.arrayContaining(["Bev"]);

    });

    // passengers can be cleared
    test('passenger(s) can be cleared completely', () => {
        this.passenger = [];

        const plane = new Plane("BA001");
        const bev = new Passenger("Bev", "P12345", "BA001");
        const toni = new Passenger("Antonio", "P67890", "BA001");
        plane.board("Bev");
        plane.board("Antonio")
        plane.removePassengers();
        expect.arrayContaining([]);

    });
    // errors
})