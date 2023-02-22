
import { pages as pagesUtils } from '@utils/index'

export default async function pagesQuery({ id }) {

    const sitePagesStore = {
        layout: {
            header: {
                favicon: {
                    image: {
                        src: ""
                    }
                },
                links: [
                    {
                        name: "Partners",
                        url: "#partners"
                    },
                    {
                        name: "Events",
                        url: "#events"
                    }
                ]
            }
        },
        pages: {
            home: {
                metaData: {
                    pageTitle: "Home"
                },
                data: {
                    hero: {
                        heading: "",
                        title: "We the Future MVMT",
                        subTitle: "",
                        cover: {
                            src: ""
                        }
                    },

                },

            },
            about: {},
            software: {},
            writings: {},
            sectors: {},
            resources: {},
        }
    }

    return generatePage({ store: sitePagesStore, id })
}




