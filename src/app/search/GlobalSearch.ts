import Jikan from "./adapters/Jikan";

export default class GlobalSearch {
    aggregator: Array<any>;
    //promises: Array<any>;
    constructor() {
        this.aggregator = [];
        //this.promises = [];
    }

    search(searchQuery: string) {
        //Promise chain
        return Jikan(searchQuery, 'anime').then(data=> {            
            this.aggregator.push(data.results)
            //console.log(this.aggregator)
            return data.results;
        }).then(()=>{
            return Jikan(searchQuery, 'manga')
        }).then(data=> {            
            this.aggregator.push(data.results)
            //console.log(this.aggregator)
            return this.aggregator;
        })        
    }
}