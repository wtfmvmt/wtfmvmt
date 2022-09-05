import type { DataPage } from "@typings/DataPage";
import resolveDataPage from "@controllers/utils/resolveDataPage";
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

        layout: {
            metaData: {
                pageTitle: "Home"
            },
            header: { ...header.init() },
            footer: { ...footer.init() },
        },


    },

    query: {

        hero: () => {

            return {

                heading: "",
                cta: {
                    name: "Join the Movement",
                    url: "/join",
                    icon: "SchoolIcon"
                },

                actionLinks: {
                    heading: "",
                    links: [
                        {
                            name: "For Artists",
                            url: "forms/artists"
                        },
                        {
                            name: "For Newcomers",
                            url: "forms/newbies"
                        },
                        {
                            name: "For Creators",
                            url: "forms/investors"
                        },
                        {
                            name: "For Vendors",
                            url: "forms/investors"
                        }
                    ]
                }
            }
        }

    }
}

export default homePage;