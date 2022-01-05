const Passenger = require('../Passenger')
const Bag = require('../Bag');

describe('Passenger', function () { //passenger test suite

    // passenger has a name
    test('has a name', () => {
        const akua = new Passenger("Akua","P12345","1A");
        expect(akua.name).toBe("Akua");
    })

    // passenger has a passportNum
    // test('has a passport number', () => {
    //     const akua = new Passenger("P12345");
    //     expect(akua.passportNumber).toBe("P12345");
    // })

    // // passenger has a seatNum
    // test('has a seat number', () => {
    //     const akua = new Passenger("1A");
    //     expect(akua.seatNumber).toBe("1A");
    // })


    // bag array is empty
    test('bags array is empty', () => {
        const bags = [];
        expect.arrayContaining([]);

    })

    // passenger can add bag and it pushes into array
    test('Passenger can add bag(s)', () => {
        const akua = new Passenger("Akua", "P12345", "1A");
        const akuaBag = new Bag(39);
        const bags = [];
        akua.addBag(akuaBag);
        expect.arrayContaining([39])

    });




})