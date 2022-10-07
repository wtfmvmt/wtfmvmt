import meta from "@configs/meta"
import layout from "@configs/layout"

import forms from "@db/forms"
import media from "@db/media"
import memberships from "@db/memberships"

const pages = ({ store, pageKey }) => {

    const { getMedia } = media()
    const { getForms } = forms()
    const { getMemberships } = memberships()

    const mediaQuery = getMedia(store)
    const formsQuery = getForms(store)
    const membershipsQuery = getMemberships(store)


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
                        url: "/memberships"
                    },
                    actionLinks: {
                        title: 'The MVMT',
                        links: formsQuery.map((form) => ({
                            name: form.title,
                            url: form.url
                        }))
                    },
                    socialLinks: socials
                },
                featuredSection: {
                    title: 'Open Events',
                    heading: "In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it...",
                    description: 'Join us at our next event',
                    carousel: mediaQuery.map((media) => media.src),
                    features: []

                },

                summarySection: {
                    title: 'The MVMT',
                    heading: 'Artvism',
                    description: "We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne",
                    sections: [
                        {
                            title: 'Awareness',
                            description: 'Awareness is the first step to change. We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne',
                        },
                        {
                            title: 'Expression',
                            description: 'Expression is the first step to change. We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne',
                        },
                        {
                            title: 'Inclusivity',
                            description: 'Diversity is the key to creativity. We believe that the more diverse the creative pipeline, the more creative the output. We are committed to creating a space where all are welcome.'
                        },
                        {
                            title: 'Development',
                            description: 'Development is the first step to change. We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne',
                        },
                        {
                            title: 'Liberation',
                            description: 'Liberation is the first step to change. We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne',
                        }
                    ]
                },

                contactSection: {
                    email: siteEmail,
                },
                statsSection: {
                    title: 'Let\'s Grow the Future Together',
                    heading: 'Memberships & Opportunities',
                    description: 'Join our MVMT and help us grow the future together',
                    tables: membershipsQuery.map((membership) => ({
                        title: membership.title,
                        features: membership.features,
                        pricing: {
                            rate: membership.cost,
                        }
                    })),
                },

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