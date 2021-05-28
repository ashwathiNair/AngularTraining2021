export class State{
    constructor(public Id:number,
        public Name:string){

        }
}

export class City{
    constructor(public Id:number,
        public Name:string, public StateId:string){

        }
}

export class Product{
    constructor(public Id:number,
        public ProductName:string,
        public CityId:number){

        }
}