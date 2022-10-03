import meta from "@configs/meta"
import layout from "@configs/layout"

import media from "@db/media"


const pages = ({ store, pageKey }) => {

    const { getMedia } = media()

    const mediaQuery = getMedia(store)


    const { title: siteTitle, email: siteEmail, impressum, socials } = meta()




    const pageData = {
        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {

                hero: {

                    title: siteTitle,
                    mediaCarousel: mediaQuery.map((media) => media.src),
                    description: impressum,

                    cta: {
                        name: "Join the MVMT",
                        url: "/join"
                    },
                    actionLinks: {
                        title: 'The MVMT',
                        links: []
                    },
                    socialLinks: socials
                }

            }
        },
        memberships: {},
        artivism: {},
        blog: {},
        community: {},
        events: {},
        forms: {},
        legal: {},
        media: {},
        partners: {},
        shop: {},
        vision: {},
        rsvp: {},

    }

    const layoutData = { ...layout(), metaData: pageData[pageKey].metaData ?? null }


    const pageObject = {
        id: `${siteTitle} | ${pageKey}--page-data`,
        version: Date.now(),
        layout: layoutData,
        data: pageData[pageKey],
    }


    return { ...pageObject } ?? null
}

export default pages