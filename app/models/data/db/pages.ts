
import layout from "@configs/layout";
import meta from "@configs/meta";
import links from "@configs/links"

import { $Hero } from "@components/Hero"
import media from "@db/media"
import memberships from "./memberships";
import blog from "@db/blog"
import partners from "@db/partners"

import { LinkTypes } from "@typings/Links"
import { MediaTypes } from "@typings/MediaTypes"

import type { DataPageProps, IDataPage } from "@typings/DataPage"


const pages = ({ store, pageKey }: DataPageProps): IDataPage => {

    const { methods: { getMedia } } = media()

    const { socials: siteSocialLinks, title: siteTitle, description: siteDescriptions } = meta()

    const formLinks = links().find((link) => link.type === LinkTypes.FORM_PAGE)

    const eventsCarousel = getMedia(store).find((media) => media.type === MediaTypes.EVENTS)

    const pageData = {

        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: {
                hero: $Hero({
                    
                }),
                featuredSection: {},
                summarySection: {},
                simpleFormSection: {},
                statsSection: {},
                imageMasonry: {},
                contactSection: {}
            },
        },
        artivism: {},
        blog: {},
        community: {},
        events: {
            metaData: {
                pageTitle: 'Our Events'
            }
        },
        forms: {},
        legal: {},
        media: {},
        memberships: {},
        partners: {},
        rsvp: {},
        shop: {},
        vision: {
            metaData: {
                pageTitle: 'Our Vision'
            }
        }
    }

    const pageLayout = { ...layout(), ...pageData[pageKey].metaData }


    return {
        id: `${siteTitle}-pages-db'`,
        version: Date.now(),
        layout: pageLayout,
        data: pageData[pageKey]
    }
}


export default pages