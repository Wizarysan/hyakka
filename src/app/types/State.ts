export type State = {
    search: string,
    results: {
        loading: boolean,
        error: boolean,
        body: Array<any>
    },
    filters: {
        name: boolean
    },
    currentCard: {
        [key:string]: any,
        ownId: string,
        id: string,
        name: string,
        type: string,
        format: string,
        cover: string,
        synopsis: string,
        by: string,
        year: string,
        genres?: Array<any>,
        ratings: string,
        tags: string,
        ongoing: string,
        url: string
    }
}