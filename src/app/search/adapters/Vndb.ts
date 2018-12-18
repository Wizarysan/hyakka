const Vndb = (query: string, type?: string) => {
    const BASE = '/api/vndb',
          SEARCH = `?q=${query}&page=`;

    let call = BASE + SEARCH;
    return fetch(call+'1', { method: 'GET'})
    .then(response=>response.json())
    .then(data=> {
        // let results = data.results.items.map((item: any) => {
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
        return data.results.items
    }) 
}