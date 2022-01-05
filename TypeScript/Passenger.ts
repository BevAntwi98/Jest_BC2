class Passenger {
    name: string;
    passportNumber: number;
    seatNumber: number;
    bags: Array<number>;

    constructor(name:string, passportNumber: number, seatNumber:number ){
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags=[];
    }
    addBag(Bag): number {
        return this.bags.push(Bag);
    };
}

export=Passenger;