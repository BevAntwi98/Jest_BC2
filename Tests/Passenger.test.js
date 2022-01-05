
// const { expect } = require('@jest/globals');
const Passenger = require('../Passenger')
const Bag = require('../Bag');
const { expect } = require('@jest/globals');


describe('Passenger', function () { //passenger test suite

    // passenger has a name
    test('has a name', () => {
        const akua = new Passenger("Akua");
        expect(akua.name).toBe("Akua");
    })

    // passenger has a passportNum
    test('has a seatnumber', () => {
        const akua = new Passenger("P12345");
        expect(akua.name).toBe("P12345");
    })

    // passenger has a seatNum


    // basg array is empty
    test('bags array is empty', () => {
        const bags =[];
        expect.arrayContaining([]);

    })

    // passenger can add bag and it pushes into array
    test('Passenger can add bag(s)', () => {
        const akua = new Passenger("Akua", "P12345", "1A");
        const akuaBag = new Bag(39);
        const bags =[];
        akua.addBag(akuaBag);
        expect.arrayContaining([39])

    })


})