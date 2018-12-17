const Jikan = (query: string, type?: string) => {
    const BASE = 'https://api.jikan.moe/v3',
          SEARCH = `/search/${type}?q=`;

    let call = BASE + SEARCH + query;
    return fetch(call, { method: 'GET'})
    .then(response=>response.json()) 
}

export default Jikan;