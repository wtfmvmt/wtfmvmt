
import { pages as pagesUtils } from '@utils/index'



export const defineViewStore = () => {
    return (
        [
            0
        ]
    )
}
export default async function pagesQuery({ id }) {

    const { generatePage } = pagesUtils()

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
                        description: "",
                        cover: {
                            src: "https://res.cloudinary.com/facade-os/image/upload/v1675361093/Fa%C3%A7ade/WTFMVMT/media/Group_Photo_of_WTFMVMT_Members_with_Goofy_Faces_p6flqk.jpg"
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




