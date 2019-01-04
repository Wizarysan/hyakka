import Jikan from "./adapters/Jikan";
import Vndb from "./adapters/Vndb";
import Shikimori from "./adapters/Shikimori";

const getSingleEntry = (id: number, category: string) => {
    console.log(id)
    switch(category) {
        case 'anime':
            return Jikan(null, 'anime', id)
        case 'manga':
            return Jikan(null, 'manga', id)
    }    
}

export default getSingleEntry;