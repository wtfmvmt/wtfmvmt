
const getDataPage = async () => {

    const res = await fetch("/api/pages/",

        {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "User-Agent": "*",
                "Accept": "application/json; charset=UTF-8",
            }
        })
    try {
        const queryData = await res.json()
        return queryData
    } catch (error) {
        console.log(error)
        return `${error}`
    }

}

export default getDataPage