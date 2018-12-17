import Jikan from "./adapters/Jikan";

export default class GlobalSearch {
    aggregator: Array<any>;
    //promises: Array<any>;
    constructor() {
        this.aggregator = [];
        //this.promises = [];
    }

    test(x: string) {
        //Promise chain
        Jikan('Fate').then(data=> {            
            this.aggregator.push(data.results)
            console.log(this.aggregator)
            return data.results;
        }).then(data=>{
            return Jikan('Witch')
        }).then(data=> {            
            this.aggregator.push(data.results)
            console.log(this.aggregator)
            return data.results;
        })        

    }

}