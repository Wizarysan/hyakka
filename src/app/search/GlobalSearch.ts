import Jikan from "./adapters/Jikan";

interface Aggregator {
    anime?: Array<any>,
    manga?: Array<any>
}

export default class GlobalSearch {
    aggregator: Aggregator;
    constructor() {
        this.aggregator = {
            anime: [],
            manga: []
        };
    }

    search(searchQuery: string) {
        //Promise chain
        return Jikan(searchQuery, 'anime').then(data=> {            
            this.aggregator.anime = data;
            return data;
        }).then(()=>{
            return Jikan(searchQuery, 'manga')
        }).then(data=> {            
            this.aggregator.manga = data;
            return this.aggregator;
        })        
    }
}