import layout from "@configs/layout"
import meta from "@configs/meta"

import events from "@db/events"
import forms from "@db/forms"
import media from "@db/media"
import memberships from "@db/memberships"
import siteMeta from "@db/siteMeta"
import sitePages from "@db/sitePages"
import socialMedia from "@db/socialMedia"
import partners from "@db/partners"


import NotionService from "@services/notion"

import shuffle from "@utils/shuffle"

const pages = ({ store, pageKey }) => {

    const { TYPES } = NotionService.enums

    const { getMedia } = media()
    const { getEvents } = events()
    const { getForms } = forms()
    const { getMemberships } = memberships()
    const { getSitePages } = sitePages()
    const { getSiteMeta } = siteMeta()
    const { getPartners } = partners()
    const { getSocialMedia } = socialMedia()


    const mediaQuery = getMedia(store)
    const formsQuery = getForms(store)
    const membershipsQuery = getMemberships(store)
    const sitePagesQuery = getSitePages(store)
    const siteMetaQuery = getSiteMeta(store)
    const socialMediaQuery = getSocialMedia(store)
    const eventsQuery = getEvents(store)
    const partnersQuery = getPartners(store)

    const { title: siteTitle, email: siteEmail, impressum, logo } = meta()


    const pageData = {
        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {

                hero: {
                    title: siteTitle,
                    mediaCarousel: shuffle(mediaQuery.map((media) => media.src)),
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
                    socialLinks: socialMediaQuery
                },
                logoArray: {
                    title: 'Our Partners',
                    heading: 'Featured Partners & Leaders',
                    description: 'Learn more about our partners and their work',
                    logos: partnersQuery
                },
                featuredSection: {
                    title: 'Open Events',
                    heading: "In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it...",
                    description: 'Join us at our next event',
                    carousel: shuffle(mediaQuery.map((media) => media.src)),
                    features: eventsQuery.map((event) => ({ title: event.name, ...event }))
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
                    socials: socialMediaQuery
                },
                statsSection: {
                    title: 'Let\'s Grow the Future Together',
                    heading: 'Memberships & Opportunities',
                    description: 'Join our MVMT and help us grow the future together',
                    tables: membershipsQuery.map((membership) => ({
                        ...membership,
                        pricing: {
                            rate: membership?.cost,
                        }
                    })),
                },

                imageMasonry: {
                    title: 'Our MVMbers',
                    heading: 'Our Team',
                    description: 'who we are',
                    masonry: {
                        minor: [
                            {
                                title: 'Brandon Payne'
                            }
                        ]
                    }
                }

            }
        },
        memberships: {
            metaData: {
                pageTitle: 'Memberships'
            },
            data: {}
        },
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
        rsvp: {
            metaData: {},
            data: {}
        },

    }

    const copyrightData = siteMetaQuery.find((meta) => meta.types.includes(TYPES.COPYRIGHT)).values ?? ["", ""]
    const pageLinkData = sitePagesQuery.map((page) => ({ name: page.name, icon: page.icon, url: page.name.toLowerCase() }))
    const bannerData = siteMetaQuery.find((meta) => meta.types.includes(TYPES.BANNER)) ?? ["This site is under construction.", ""]
    const impressumData = siteMetaQuery.find((meta) => meta.types.includes(TYPES.IMPRESSUM)).values ?? ["", ""]

    const layoutData = {
        ...layout({
            headerObject: {
                banner: {
                    countdown: Date.now(),
                    messages: bannerData.values
                }
            },
            menuObject: {
                links: pageLinkData,
            },
            footerObject: {
                impressum: impressumData,
                sitePagesQuery,
                copyright: copyrightData,
                socials: socialMediaQuery,
                links: pageLinkData,
                email: siteEmail,
                logo,
            },
        }),
        metaData: pageData[pageKey].metaData ?? null
    }

    const pageObject = {
        id: `${siteTitle} | ${pageKey}--page-data`,
        version: Date.now(),
        layout: layoutData,
        data: pageData[pageKey],
    }


    return { ...pageObject }
}

export default pages