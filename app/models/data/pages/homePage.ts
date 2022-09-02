import type { DataPage } from '@typings/DataPage';
import resolveDataPage from '@controllers/utils/resolveDataPage';
import { Icons } from "@typings/Icons"

const homePage: DataPage = {

    init: () => {

        try {
            resolveDataPage(homePage);
        }
        catch (E) {
            console.log(E);
        }

        return {
            ...homePage.data, ...homePage.query
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
                cta: {
                    name: 'Join the Movement',
                    url: '/join',
                    icon: Icons.SchoolIcon
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