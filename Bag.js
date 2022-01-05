class Bag {

    weight;

    constructor(weight) {
        this.weight = weight;

    }

    isOverLimit() {

        return this.weight > 23;
        // return (this.weight > this.limit) ? "Too heavy" : "Perfect Weight"; <-- should use boolean rather thn string

    }
}

module.exports = Bag;

const bevbag = new Bag(33);
const tonibag = new Bag(22);
console.log(bevbag);
console.log(tonibag);

console.log(bevbag.isOverLimit());
console.log(tonibag.isOverLimit());



