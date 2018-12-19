const Vndb = (query: string) => {
    const BASE = '/api/vndb',
          SEARCH = `?q=${query}&page=`;

    let call = BASE + SEARCH;
    return fetch(call+'1', { method: 'GET'})
    .then(response=>response.json())
    .then(data=> {
        data = JSON.parse(data)
        let results = data["items"].map((item: any) => {
            item.released ? item.released = item.released.substring(0,4) : item.released = '';
            return {
                    id: item.id,
                    name: item.title,
                    type: "Visual novel",
                    format: "Game",
                    cover: item.image,
                    synopsis: item.description,
                    by: '',
                    year: item.released,
                    genres: '',
                    ratings: item.rating,
                    tags: '',
                    ongoing: '',
                    url: 'https://vndb.org/v'+item.id
                }
            });
        return results
    }) 
}

export default Vndb;