
const Bag = require('../Bag')

describe('Bag', function () {  //bag test suite

    // bag has weight
    test('has a weight', () => {
        const bag = new Bag(13);
        expect(bag.weight).toBe(13);
    });

    // test overweight
    test('bag is overweight', () => {
        const bigBag = new Bag(50);

        expect(bigBag.isOverLimit()).toBe(true);
    });

    // test underweight
    test('bag is underweight', () => {
        const bigBag = new Bag(22);

        expect(bigBag.isOverLimit()).toBe(false);
    });

    // bag weight not entered
    test('bag has no weight', () => {
        const whatBag = new Bag();

        expect(() => {
            isOverLimit().toThrow("Bag must have a weight");
        });

    })


})
