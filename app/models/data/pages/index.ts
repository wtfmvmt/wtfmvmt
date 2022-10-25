import { layout } from "@configs/index"
import { events, forms, media, partners, meta, socialMedia, team } from "@db/index"
import type { PageObjectProps, PagesDBProps } from "@typings/Page"

const pages = ({ store, key }: PagesDBProps): PageObjectProps => {

    //api queries
    const { getTeam } = team(store)
    const { getMedia } = media(store)
    const { getSocialMedia } = socialMedia(store)
    const { getMeta, getCopyright, getSiteLinks, getEmailAddress, getFavicon, getTitle, getImpressum, getAudienceHook, getCallToAction } = meta(store)
    const { getPartners } = partners(store)
    const { getEvents } = events(store)
    const { getForms } = forms(store)

    //resolver database
    const pageData = {
        home: {
            metaData: {
                pageTitle: 'Home',
            },
            data: {
                hero: {

                },
                logoArray: {},
                featuredSeaction: {},
                statsRow: {},
                summarySection: {},
                simpleFormSection: {},
                rowList: {},
                columnLists: {},
                imageMasonry: {
                    name: "Our A-Team",
                    heading: "The sum of our parts",
                    title: "By Role",
                    description: "We are a team of passionate and dedicated individuals who are committed to making a difference in the world. We are a team of passionate and dedicated individuals who are committed to making a difference in the world.",
                    masonry: getTeam().map((member) => ({
                        image: {
                            src: member?.media?.url,
                            alt: member?.media?.name
                        },
                        title: member?.name,
                        heading: member?.values[0],

                    })),
                },
                contactSection: {
                    socials: getSocialMedia().map((social) => ({
                        url: social?.url,
                        name: social?.title
                    })),
                    email: getEmailAddress()?.values[0],
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

    //resolver response object
    const pageObject: PageObjectProps = {
        version: Date.now(),
        layout: layout({
            header: {
                favicon: {
                    image: getFavicon() ?? null,
                },
                search: [
                    {
                        id: "Search",
                    }
                ]
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
                links: getSiteLinks(),
                copyright: getCopyright().values,
                impressum: getImpressum().values[0]
            },
            menu: {
                links: getSiteLinks()
            },
            metaData: pageData[key]?.metaData
        }),
        data: pageData[key]?.data,
        pages: pageData[key]?.pages,
    }

    return { ...pageObject } as PageObjectProps ?? null
}

export default pages


/*      title: getTitle() ?? null,
                    mediaCarousel: getMedia().map((media) => ({
                        src: media?.covers[0]?.url,
                        alt: media?.name,
                    })),
                    description: getImpressum() ?? null,
                    cta: getCallToAction() ?? null,
                    actionLinks: {
                        title: getAudienceHook() ?? null,
                        links: getForms() ?? null
                    },
                    socialLinks: getSocialMedia()
                    
                    
                    **/