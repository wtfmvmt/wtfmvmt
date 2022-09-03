import type { DataPage } from '@typings/DataPage';
import resolveDataPage from '@controllers/utils/resolveDataPage';
import header from "@configs/header"
import footer from "@configs/footer"

const homePage: DataPage = {

    init: () => {
        try {
            resolveDataPage(homePage.query);
        }
        catch (error) {
            console.log(error);
        } finally {
            return {
                ...homePage.data, ...homePage.query,
            }
        }
    },

    data: {

        Layout: {
            metaData: {
                pageTitle: 'Home'
            },

            Header: { ...header.init() },
            Footer: { ...footer.init() },
        },

        Banner: {
            message: {
                name: 'Interest Meeting',
                url: '/form'
            }
        }
    },

    query: {

        Hero: () => {

            return {

                heading: '',
                cta: {
                    name: 'Join the Movement',
                    url: '/join',
                    icon: "SchoolIcon"
                },

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