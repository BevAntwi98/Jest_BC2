
const Plane = require('../Plane')

describe('Plane', function () { 

    test('has a type', ()=>{
        const plane = new Plane("BA001");
        expect(plane.type).toBe("BA001");
    })
})