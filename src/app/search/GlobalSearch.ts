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

    //TODO 
    //Mal cannot parse Russian characters, need to search Shiki for russian titles
    search(searchQuery: string) {
        //Promise chain
        let promises = [];
        
        promises.push(Jikan(searchQuery, 'anime').then(data=> {            
            this.aggregator.anime = data;
            return data;
        }).catch((err)=>{
            console.error(err); return []
        }))
        promises.push(Jikan(searchQuery, 'manga').then(data=> {            
            this.aggregator.manga = data;
            return data;
        }).catch((err)=>{
            console.error(err); return []
        }))
        promises.push(Shikimori(searchQuery, 'ranobe').then(data=> {            
            this.aggregator.ranobe = data;
            return data;
        }).catch((err)=>{
            console.error(err); return []
        }))
        promises.push(Vndb(searchQuery).then(data=> {            
            this.aggregator.vn = data;
            return data;
        }).catch((err)=>{
            console.error(err); return []
        }))

        return Promise.all(promises).then(data=> {
            return this.aggregator;
        }).catch((err)=> console.error('Something gone wrong in Promise.all'))
            
    }
}