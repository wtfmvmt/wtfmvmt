import resolveDataPage from "@utils/resolveDataPage"
import type { DataPage } from "@typings/DataPage"


const header: DataPage = {

    init: () => {
        try {
            resolveDataPage(header.query);
            return { ...header.data, ...header.query }
        } catch (e) {
            console.log(e)
            return { ...header.data }
        }
    },

    query: {

    },

    data: {

        search: [
            {
                id: 'Community'
            },
            {
                id: 'Events'
            },
            {
                id: 'Artists'
            },
            {
                id: 'Venues'
            },
            {
                id: 'Blog'
            }
        ],

        banner: {
            messages: ["Attend our Interest Meeting 09/06", "This site is under construction."]
        },
        favicon: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        },


    }
}

export default header