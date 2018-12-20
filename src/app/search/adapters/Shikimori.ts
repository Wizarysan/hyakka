//https://shikimori.org/api/ranobe?search=Umineko&limit=50
const Shikimori = (query: string, type?: string) => {
    const BASE = '/api/shiki',
          SEARCH = `?search=${query}&type=${type}&limit=50`;

    let call = BASE + SEARCH;
    return fetch(call)
    .then(response=>response.json())
    .then(data=> {
        data = JSON.parse(data)
        let results = data.map((item: any) => {
            item.aired_on ? item.aired_on = item.aired_on.substring(0,4) : item.aired_on = '';
            return {
                    id: item.id,
                    name: item.name,
                    type: type,
                    format: item.kind,
                    cover: 'https://shikimori.org' + item.image.original,
                    synopsis: '',
                    by: '',
                    year: item.aired_on,
                    genres: '',
                    ratings: item.score,
                    tags: '',
                    ongoing: item.status,
                    url: 'https://shikimori.org' + item.url
                }
            });
        return results
    }) 
}

export default Shikimori;