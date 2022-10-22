import { layout } from "@configs/index"
import { events, forms, media, partners, siteMeta, socialMedia, team } from "@db/index"
import type { PageObjectProps, PagesDBProps } from "@typings/Page"

const pages = ({ store, key }: PagesDBProps): PageObjectProps => {

    //api queries
    const { getTeam } = team(store)
    const { getMedia } = media(store)
    const { getSocialMedia } = socialMedia(store)
    const { getSiteMeta, getCopyright, getSiteLinks, getFavicon, getSiteTitle, getImpressum, getAudienceHook, getFormBanner } = siteMeta(store)
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
                    title: getSiteTitle(),
                    mediaCarousel: getMedia().map((media) => ({
                        src: media?.covers[0]?.url,
                        alt: media?.name,
                    })),
                    description: getImpressum(),
                    cta: getFormBanner(),
                    actionLinks: {
                        title: getAudienceHook(),
                        links: getForms()
                    },
                    socialLinks: getSocialMedia()
                },

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

    //resolver response object
    const pageObject: PageObjectProps = {
        version: Date.now(),
        layout: layout({
            header: {
                favicon: {
                    image: getFavicon(),
                }
            },
            footer: {
                socials: getSocialMedia(),
                links: getSiteLinks(),
                copyright: getCopyright(),
                impresseum: getImpressum()
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