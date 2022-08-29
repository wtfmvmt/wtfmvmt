export type DataPage = {
    data: object,
    query: object
}


const homePage = {

    data: {
        metaData: {
            pageTitle: 'HQ'
        }
    },

    query: {

        hero: () => {

            return {
                heading: ''
            }
        }

    }
}

export default homePage;