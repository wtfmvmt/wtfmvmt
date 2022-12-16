import layout from "@configs/layout"
import events from "@db/events"
import faqs from "@db/faqs"
import forms from "@db/forms"
import links from "@db/links"
import media from "@db/media"
import memberships from "@db/memberships"
import meta from "@db/meta"
import partners from "@db/partners"
import socialMedia from "@db/social_media"
import team from "@db/team"
import { collections } from "@utils/index"

import type { PageObjectType, PagesDBProps } from "@typings/Page"
import type { HeroProps } from "@typings/Hero"
import type { LogoArrayProps } from "@typings/LogoArray"
import type { SummaryProps } from "@typings/Summary"
import type { FeaturedProps } from "@typings/Featured"
import type { StatsRowProps } from "@typings/StatsRow"
import type { ColumnListProps } from "@typings/ColumnList"

import type { ContactProps } from "@typings/ContactProps"

const pages = ({ store, key }: PagesDBProps): PageObjectType => {

    const { shuffle } = collections()

    const { getFAQs } = faqs(store)
    const { getTeam } = team(store)
    const { getPhotos } = media(store)
    const { getMemberships } = memberships(store)
    const { getLinks } = links(store)
    const { getSocialMedia } = socialMedia(store)
    const { getPartners } = partners(store)
    const { getEvents } = events(store)
    const { getForms } = forms(store)
    const { getBanner, getArtivismHeading, getEventsHeading, getTeamHeader, getCopyright, getSearch, getPillars, getEmailAddress,
        getFavicon, getTitle, getImpressum, getMembershipsHeading, getFAQsHeading, getPartnersHeading, getAudienceHook, getCallToAction } = meta(store)

    const pageData = {
        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: <HeroProps>{
                    title: getTitle()?.name ?? null,
                    mediaCarousel: shuffle(getPhotos().map((media) => (media?.media[0]?.url ?? null))),
                    description: getImpressum().values[0],
                    socialLinks: getSocialMedia().map((social) => ({ url: social?.url, name: social?.name })),
                    actionLinks: {
                        title: "We The Future",
                        links: getForms().map((form) => ({
                            name: form?.name,
                            url: form?.url
                        }))
                    },

                    features: {
                        title: 'Features',
                        featured: []
                    },
                    cta: {
                        name: getCallToAction().values[0],
                    }
                },
                logoArray: <LogoArrayProps>{
                    title: getPartnersHeading()?.name,
                    description: getPartnersHeading()?.description,
                    heading: getPartnersHeading()?.values[0],
                    logos: getPartners().map((partner) => ({
                        title: partner?.name,
                        description: partner?.description ?? null,
                        image: {
                            src: partner?.media[0]?.url
                        }

                    }))
                },

                tableRow: {
                    title: getMembershipsHeading()?.name,
                    heading: getMembershipsHeading()?.values[0],
                    tables: getMemberships().map((membership) => ({
                        title: membership?.name,
                        value: membership?.price,
                        cta: {
                            name: membership?.actions[0] ?? null,
                            url: membership?.url ?? null
                        },
                        features: membership?.values?.map((feature) => ({
                            name: feature
                        })) ?? null
                    }))
                },
                featured: <FeaturedProps>{
                    title: getEventsHeading()?.name,
                    description: getEventsHeading()?.description,
                    heading: getEventsHeading()?.values[0],
                    carousel: shuffle(getPhotos().map((m) => m?.media[0]?.url ?? null)),
                    features: getEvents().map((event) => ({ title: event?.name }))
                },
                statsRow: <StatsRowProps>{
                    stats: [
                        {
                            title: "Team Members",
                            value: getTeam().length
                        },
                        {
                            title: "Team Members",
                            value: getTeam().length
                        },
                        {
                            title: "Team Members",
                            value: getTeam().length
                        },
                        {
                            title: "Team Members",
                            value: getTeam().length
                        }
                    ]
                },
                summary: <SummaryProps>{
                    title: getArtivismHeading()?.name,
                    description: getArtivismHeading()?.description,
                    heading: getArtivismHeading()?.values[0] ?? null,
                    video: {
                        url: getArtivismHeading()?.youtube ?? null
                    }

                },
                imageMasonry: {
                    title: getTeamHeader()[0]?.name,
                    description: getTeamHeader()[0]?.description,
                    heading: getTeamHeader()[0]?.values[0],
                    masonry: getTeam().map((team) => ({
                        image: {
                            src: team?.media[0]?.url ?? null,
                        },
                        heading: team?.types[0] ?? null,
                        title: team?.name ?? null,
                    }))

                },
                rowList: {
                    list: new Array(20).map((i) => ({ description: "Love" }))
                },
                columnList: <ColumnListProps>{
                    title: getFAQsHeading()?.name,
                    list: getFAQs().map((question) => ({
                        name: question?.name,
                        description: question?.description,
                        icon: question?.icon
                    }))
                },
                contact: <ContactProps>{
                    socials: getSocialMedia().map((social) => ({
                        url: social?.url ?? null
                    })),
                    email: getEmailAddress().email,
                }

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

        },
        memberships: {
            metaData: {
                pageTitle: "Memberships",
            },
            data: {}
        },
        legal: {
            metaData: {
                pageTitle: "Legal"
            }
        },
        store: {
            metaData: {
                pageTitle: "Store"
            }
        },
        partners: {},
        blog: {},
        community: {},
        media: {},
        artivism: {},
        about: {},
    }

    const pageObject: PageObjectType = {
        version: Date.now(),
        layout: layout({
            header: {
                banner: {
                    messages: getBanner().values
                },
                favicon: {
                    image: {
                        src: getFavicon()?.files[0]?.url ?? null
                    },
                    url: getFavicon()?.url ?? null
                }
            },
            footer: {
                socials: getSocialMedia(),
                favicon: {
                    image: {
                        src: getFavicon()?.files[0]?.url ?? null,
                        alt: getFavicon()?.files[0]?.name ?? null,
                    },
                    url: getFavicon().url ?? null,
                },
                links: getLinks(),
                copyright: getCopyright().values,
                impressum: getImpressum().values[0]
            },
            menu: {
                links: getLinks().map((link) => ({
                    name: link?.name,
                    url: link?.url,
                })),
                cta: [
                    {
                        name: "Support Us"
                    }
                ],

                favicon: {
                    image: {
                        src: getFavicon().files[0]?.url,
                    },
                    url: getFavicon()?.url
                }
            },
            metaData: {
                title: "WTFMVMT",
                pageTitle: "Home"
            }
        }),
        data: pageData[key]?.data,
        pages: pageData[key]?.pages,
    }

    return { ...pageObject } as PageObjectType ?? null
}

export default pages

