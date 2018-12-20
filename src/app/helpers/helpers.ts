export const filterByString = (target: Array<any>, filter: string, query: string) => {
    return target.filter((item: any)=>{
        return item[filter].toLowerCase().includes(query.toLowerCase())
    })
}
