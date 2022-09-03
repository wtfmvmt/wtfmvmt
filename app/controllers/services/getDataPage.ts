
const getDataPage = async () => {

    const res = await fetch("http://localhost:3001/api/pages/",

        {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
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