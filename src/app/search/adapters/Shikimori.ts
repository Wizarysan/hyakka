//https://shikimori.org/api/ranobe?search=Umineko&limit=50
const Shikimori = (query: string, type?: string) => {
    const BASE = 'https://shikimori.org/api/',
          SEARCH = `${type}?search=${query}&limit=50`;

    let call = BASE + SEARCH;
    return fetch(call, { method: 'GET'})
    .then(response=>response.json())
    .then(data=> {
        console.log(data)
        // let results = data.results.map((item: any) => {
        //     let ongoing;
        //     item.airing!=null ? ongoing = item.airing : ongoing = item.publishing;
        //     item.start_date ? item.start_date = item.start_date.substring(0,4) : item.start_date = '';
        //     return {
        //             id: item.mal_id,
        //             name: item.title,
        //             type: type,
        //             format: item.type,
        //             cover: item.image_url,
        //             synopsis: item.synopsis,
        //             by: '',
        //             year: item.start_date,
        //             genres: '',
        //             ratings: item.score,
        //             tags: '',
        //             ongoing: ongoing,
        //             url: item.url
        //         }
        //     });
        // return results
        return data;
    }) 
}

export default Shikimori;