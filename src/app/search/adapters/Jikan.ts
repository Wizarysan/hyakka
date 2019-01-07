//https://jikan.docs.apiary.io

const Jikan = (query: string, type?: string, id?: number) => {
    const BASE = 'https://api.jikan.moe/v3/',
          SEARCH = `search/${type}?q=`;
          
    let collector = (data: any) => {},
        call;      

    if(id) {
        call = BASE + type + '/' + id; 
        collector = data => {
            let ongoing, genres, start_date, author;
            data.airing!=null ? ongoing = data.airing : ongoing = data.publishing;
            genres = data.genres.map((genre: any)=> genre.name);
            console.log(data)         
            console.log(type)  
            switch(type) {
                case 'anime': 
                    data.aired.from ? start_date = data.aired.from.substring(0,4) : start_date = '';
                    author = data.studios[0].name;
                    break;
                case 'manga':
                    data.published.from ? start_date = data.published.from.substring(0,4) : start_date = '';
                    author = data.authors[0].name;
                    break;
                default:
                    start_date = '';  
            }                      
            
            return {
                id: id,
                ownId: data.mal_id,
                name: data.title,
                type: type,
                format: data.type,
                cover: data.image_url,
                synopsis: data.synopsis,
                by: author,
                year: start_date,
                genres: genres,
                ratings: data.score,
                tags: '',
                ongoing: ongoing,
                url: data.url
            }
        }      
    } else {
        call = BASE + SEARCH + query;
        collector = data => {
            return data.results.map((item: any) => {
                let ongoing;
                item.airing!=null ? ongoing = item.airing : ongoing = item.publishing;
                item.start_date ? item.start_date = item.start_date.substring(0,4) : item.start_date = '';
                return {
                        id: item.mal_id,
                        name: item.title,
                        type: type,
                        format: item.type,
                        cover: item.image_url,
                        synopsis: item.synopsis,
                        by: '',
                        year: item.start_date,
                        genres: '',
                        ratings: item.score,
                        tags: '',
                        ongoing: ongoing,
                        url: item.url
                    }
                });
        }
    }

    return fetch(call, { method: 'GET'})
            .then(response=>response.json())
            .then(data=> {
                let results = collector(data)
                return results
            }).catch(err=> {
                console.error('Jikan api error ', err);
                return err;
            }) 
}

export default Jikan;