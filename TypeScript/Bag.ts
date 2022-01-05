class Bag {
    weight: number;
    constructor(weight:number){
        this.weight=weight;
    }
    isOverLimit(): boolean {
        return this.weight>23;
    }
}

export=Bag;