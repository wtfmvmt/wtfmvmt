import layout from "@configs/layout"
import faqs from "@db/faqs"
import { events, forms, links, media, memberships, meta, partners, socialMedia, team } from "@db/index"
import type {
    FeaturedSectionProps, HeroProps, LogoArrayProps, PageObjectType, PagesDBProps,
    SummarySectionProps
} from "@typings/index"
import utils from "@utils/index"



const pages = ({ store, key }: PagesDBProps): PageObjectType => {

    const { collections: { shuffle } } = utils()

    const { getFAQs } = faqs(store)
    const { getTeam } = team(store)
    const { getPhotos } = media(store)
    const { getMemberships } = memberships(store)
    const { getLinks, getSitePages } = links(store)
    const { getSocialMedia } = socialMedia(store)
    const { getBanner, getTeamHeader, getEventsHeader, getCopyright, getSearch, getPillars, getEmailAddress, getFavicon, getTitle, getImpressum, getAudienceHook, getCallToAction } = meta(store)
    const { getPartners } = partners(store)
    const { getEvents } = events(store)
    const { getForms } = forms(store)

    const pageData = {
        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: <HeroProps>{
                    title: getTitle().values[0],
                    mediaCarousel: shuffle(getPhotos().map((media) => (media?.media[0]?.url ?? null))),
                    description: getImpressum().values[0],
                    socialLinks: getSocialMedia().map((social) => ({ url: social?.url, name: social?.name })),
                    actionLinks: {
                        title: "We The Future",
                        links: getForms().map((form) => ({
                            name: form?.name,
                            url: form?.url,
                            icon: form?.icon
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
                    title: 'Our Partners',
                    logos: getPartners().map((partner) => ({
                        title: partner?.name,
                        image: {
                            src: partner?.media[0]?.url
                        }

                    }))
                },

                tableRow: {
                    title: 'Our Memberships',
                    tables: getMemberships().map((membership) => ({ title: membership?.name }))
                },
                featuredSection: <FeaturedSectionProps>{
                    title: getEventsHeader()[0]?.name,
                    description: getEventsHeader()[0]?.description,
                    heading: getEventsHeader()[0]?.values[0],
                    carousel: shuffle(getPhotos().map((m) => m?.media[0]?.url ?? null)),
                    features: getEvents().map((event) => ({
                        title: event?.name,
                        cover: event?.media[0]?.url ?? null,
                        description: event?.description
                    }))
                },
                statsRow: {},
                summarySection: <SummarySectionProps>{
                    sections: getPillars().map((s) => ({
                        title: s?.name,
                        description: s?.description
                    }))
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
                rowList: {},
                columnList: {
                    title: "Frequently Asked Questions",
                    list: getFAQs().map((f) => ({
                        name: f?.name,
                        description: f?.description,
                        icon: f?.icon
                    }))
                },
                contactSection: {
                    socials: getSocialMedia(),
                    email: getEmailAddress().email,
                }

            },

            artivism: {},
            blog: {},
            community: {},
            events: {
                metaData: {
                    pageTitle: "Events"
                },
                data: {

                }
            },
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
    }



    const pageObject: PageObjectType = {
        version: Date.now(),
        layout: layout({
            header: {
                banner: {
                    messages: getBanner().values
                },
                search: getSearch()?.values?.map((search) => ({ id: search })),
                favicon: {
                    image: {
                        src: getFavicon().files[0]?.url
                    },
                    url: getFavicon()?.url
                }
            },
            footer: {
                socials: getSocialMedia(),
                favicon: {
                    image: {
                        src: getFavicon().files[0]?.url,
                        alt: getFavicon().files[0]?.name,
                    },
                    url: getFavicon().url ?? null,
                },
                links: getSitePages(),
                copyright: getCopyright().values,
                impressum: getImpressum().values[0]
            },
            menu: {
                links: getSitePages().map((link) => ({
                    name: link?.name,
                    url: link?.url,
                    icon: link?.icon
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

    return { ...pageObject } as PageObjectType
}

export default pages

