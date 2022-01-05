const { test, expect } = require('@jest/globals');
const Airport = require('../Airport')

describe('Airport', function () {  //Airport test suite

    // check airport has name
    test('test aiport has name', () => {
        const a = new Airport;
        a.name = "Heathrow Terminal 5";
        expect(a.name).toBe("Heathrow Terminal 5");
    });

    // check airport does not have a name
    test('airport does not have a name', () =>{
        const b = new Airport;
        b.name=null;
        expect(b.name).toBeNull();
    })

})