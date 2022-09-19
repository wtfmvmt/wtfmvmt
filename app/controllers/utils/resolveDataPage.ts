
const resolveDataPage =  (queryObject) => {
    Object.keys(queryObject).map( key => {
        queryObject[key] =  queryObject[key]()
    })
}

export default resolveDataPage