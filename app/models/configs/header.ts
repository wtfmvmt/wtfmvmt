import resolveDataPage from "@utils/resolveDataPage"
import type { DataPage } from "@typings/DataPage"
import search from "@configs/search"

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

        search: [...search.collections],
        banner: {
            countdown: 10000000000,
            messages: ["Attend our Interest Meeting 09/06", "This site is under construction."]
        },
        favicon: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        },


    }
}

export default header