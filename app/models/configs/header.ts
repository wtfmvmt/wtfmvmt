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

        title: {
            name: 'WTFMVMT',
            url: '/about'
        },

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
            icon: 'SearchIcon',
            messages: ["Attend our Interest Meeting 09/06", "This site is under construction."]
        },
        favicon: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        },

        navLinks: [
            {
                name: 'Home',
                url: '/'
            },
            {
                name: 'Artivism',
                url: '/about'
            },

            {
                name: 'Community',
                url: '/join'
            },
            {
                name: 'Contact',
                url: '/contact'
            }
        ],

        cta: {
            name: 'Join the MVMT',
            url: '/join'
        },

    }
}

export default header