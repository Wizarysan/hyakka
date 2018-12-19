export type State = {
    search: string,
    results: {
        loading: boolean,
        error: boolean,
        body: Array<any>
    },
    filters: {
        name: string
    }
}