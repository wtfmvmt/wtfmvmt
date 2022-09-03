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
        bannerData: () => {

            return {
                message: ''
            }
        }
    },

    data: {
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
                name: 'About',
                url: '/about'
            },
            {
                name: 'Join',
                url: '/join'
            },
            {
                name: 'Contact',
                url: '/contact'
            }
        ],

        cta: {
            name: 'Join',
            url: '/join'
        },

    }
}

export default header