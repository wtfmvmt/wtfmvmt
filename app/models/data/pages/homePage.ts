export type DataPage = {
    init: Function,
    data: object,
    query: object
}


const homePage: DataPage = {

    init: () => {

        return {
            ...homePage.data,
        }
    },

    data: {
        metaData: {
            pageTitle: 'HQ'
        }
    },

    query: {

        hero: () => {

            return {

                heading: '',
                actionLinks: {
                    heading: '',
                    links: [
                        {
                            name: 'For Artists',
                            url: 'forms/artists'
                        },
                        {
                            name: 'For Newbies',
                            url: 'forms/newbies'
                        },
                        {
                            name: 'For Investors',
                            url: 'forms/investors'
                        }
                    ]
                }
            }
        }

    }
}

export default homePage;