import layout from "@configs/layout"
import { events, forms, links, media, meta, partners, socialMedia, team } from "@db/index"
import type { HeroProps, LogoArrayProps, PageObjectProps, PagesDBProps, SummarySectionProps } from "@typings/index"
import utils from "@utils/index"


const pages = ({ store, key }: PagesDBProps): PageObjectProps => {

    const { collections: { shuffle } } = utils()

    const { getTeam } = team(store)
    const { getMedia, getPhotos, getEventsAlbum } = media(store)
    const { getLinks, getSitePages } = links(store)
    const { getSocialMedia } = socialMedia(store)
    const { getBanner, getTeamHeader, getCopyright, getSearch, getPillars, getEmailAddress, getFavicon, getTitle, getImpressum, getAudienceHook, getCallToAction } = meta(store)
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
                    title: 'Our Partners',
                    logos: getPartners().map((p) => ({
                        title: p?.name,
                        image: {
                            src: p?.media[0]?.url
                        }

                    }))
                },
                featuredSection: {
                    carousel: shuffle(getPhotos().map((m) => m?.media[0]?.url ?? null)),
                },
                statsRow: {},
                summarySection: <SummarySectionProps>{
                    sections: getPillars().map((s) => ({
                        title: s?.name,
                        description: s?.description
                    }))
                },
                imageMasonry: {
                    title: "Our Team & Founder",
                    heading: "These people behind the scenes are what make the magic happen.",
                    masonry: getTeam().map((team) => ({
                        image: {
                            src: team?.media[0]?.url ?? null,
                        },

                        title: team?.name,
                    }))

                },
                rowList: {},
                columnLists: {},
                contactSection: {
                    socials: getSocialMedia(),
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

        }
    }

    const pageObject: PageObjectProps = {
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
                    url: '/',
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
                    url: "/"
                }
            },
            metaData: {
                title: "WTFMVMT",
            }
        }),
        data: pageData[key]?.data,
        pages: pageData[key]?.pages,
    }

    return { ...pageObject } as PageObjectProps
}

export default pages

