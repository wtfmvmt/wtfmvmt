import layout from "@configs/layout"
import { events, forms, media, meta, partners, socialMedia, team, links } from "@db/index"
import { search } from "@notionhq/client/build/src/api-endpoints"
import type { HeroProps, PageObjectProps, PagesDBProps } from "@typings/index"
import utils from "@utils/index"


const pages = ({ store, key }: PagesDBProps): PageObjectProps => {

    const { collections: { shuffle } } = utils()

    const { getTeam } = team(store)
    const { getMedia, getEventsAlbum } = media(store)
    const { getLinks, getSitePages } = links(store)
    const { getSocialMedia } = socialMedia(store)
    const { getBanner, getCopyright, getSearch, getEmailAddress, getFavicon, getTitle, getImpressum, getAudienceHook, getCallToAction } = meta(store)
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
                    mediaCarousel: shuffle(getMedia().map((media) => (media?.media[0]?.url ?? null))),
                    actionLinks: {
                        title: "Get in touch",
                        links: getForms().map((form) => ({
                            name: form?.name,
                            url: form?.url
                        }))
                    },
                    features: {
                        title: 'Features',
                        featured: []
                    }
                },
                logoArray: {},
                featuredSeaction: {},
                statsRow: {},
                summarySection: {},
                simpleFormSection: {},
                imageMasonry: {
                    title: "Our Team & Founder",
                    heading: "These people behind the scenes are what make the magic happen.",
                    masonry: getTeam().map((team) => ({
                        image: {
                            src: team?.media[0]?.url,
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
                        name: "Join",
                    }
                ],
                favicon: {
                    src: getFavicon().files[0]?.url,
                    url: "/"
                }
            },
            metaData: pageData[key]?.metaData
        }),
        data: pageData[key]?.data,
        pages: pageData[key]?.pages,
    }

    return { ...pageObject } as PageObjectProps
}

export default pages

