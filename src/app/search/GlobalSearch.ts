import Jikan from "./adapters/Jikan";
import Vndb from "./adapters/Vndb";
import Shikimori from "./adapters/Shikimori";

interface Aggregator {
    anime?: Array<any>,
    manga?: Array<any>,
    ranobe?: Array<any>,
    vn?: Array<any>,
}

export default class GlobalSearch {
    aggregator: Aggregator;
    constructor() {
        this.aggregator = {
            anime: [],
            manga: [],
            ranobe: [],
            vn: []            
        };
    }

    //TODO test and maybe refactor to separate promises with flags or Promise.all
    //Mal cannot parse Russian characters, need to search Shiki for russian titles
    search(searchQuery: string) {
        //Promise chain
        return Jikan(searchQuery, 'anime').then(data=> {            
            this.aggregator.anime = data;
            return data;
        }).then(()=>{
            return Jikan(searchQuery, 'manga')
        }).then(data=> {            
            this.aggregator.manga = data;
            return Shikimori(searchQuery, 'ranobe')
            .then(data=> {
                this.aggregator.ranobe = data;
                return Vndb(searchQuery).then(
                    data=> {
                        this.aggregator.vn = data; 
                        return this.aggregator;
                    }
                )                
            })            
        })         
    }
}