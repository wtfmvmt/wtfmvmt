

const optimizedFetch = () => {


    return fetch(`${process.env.NODE_ENV === "production" ? "https://wtfmvmt.com/api/media" : `http://localhost:${process.env.PORT || 3000}/api/media`}`, {
        method: 'GET',
    })
}


export default optimizedFetch