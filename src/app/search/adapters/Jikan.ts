const Jikan = (query: string, type?: string) => {
    const BASE = 'https://api.jikan.moe/v3',
          SEARCH = `/search/${type}?q=`;

    let call = BASE + SEARCH + query;
    let jikanPromise = fetch(call, { method: 'GET'})
    .then(response=>response.json()) 
    // .then(data=>{
    //     //console.log(data);
    //     return data.results;
    // }) 
    //.catch( console.error );

    return jikanPromise;
}

export default Jikan;