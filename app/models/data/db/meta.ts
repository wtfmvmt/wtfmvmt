import FacadeService from "@services/facade";
import type { DatabaseObjectType } from "@typings/Data";
import type { NotionPageObjectType } from "@typings/Notion";
import { collections } from "@utils/index";

const meta = (store: NotionPageObjectType): DatabaseObjectType => {

    const { meta, variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getEventsHeading: () => {
            return queryDatabase({
                keys: [variants.event, variants.heading],
                db: dbObject.db.data,
            })
        },

        getFAQsHeading: () => {
            return queryDatabase({
                keys: [variants.heading, variants.faqs],
                db: dbObject.db.data
            })
        },

        getMembershipsHeading: () => {
            return queryDatabase({
                keys: [variants.heading, variants.memberships],
                db: dbObject.db.data
            })
        },

        getPartnersHeading: () => {
            return queryDatabase({
                keys: [variants.heading, variants.partners],
                db: dbObject.db.data
            })
        },
        getArtivismHeading: () => {
            return queryDatabase({
                keys: [variants.artivism, variants.heading],
                db: dbObject.db.data
            })
        },

        getTeamHeading: () => {
            return queryDatabase({
                keys: [variants.team, variants.heading],
                db: dbObject.db.data,
            })
        },

        getPillars: () => {
            return queryDatabase({
                keys: [variants.pillar],
                db: dbObject.db.data,
                batch: true
            })
        },
        getSearch: () => {
            return queryDatabase({
                keys: [variants.search],
                db: dbObject.db.data,

            })
        },
        getTitle: () => {
            return queryDatabase({
                keys: [variants.title],
                db: dbObject.db.data,
            })
        },
        getCopyright: () => {
            return queryDatabase({
                keys: [variants.copyright],
                db: dbObject.db.data,

            })
        },
        getEmailAddress: () => {
            return queryDatabase({
                keys: [variants.email],
                db: dbObject.db.data,

            })
        },
        getBanner: () => {
            return queryDatabase({
                keys: [variants.banner],
                db: dbObject.db.data,

            })
        },
        getFavicon: () => {
            return queryDatabase({
                keys: [variants.favicon],
                db: dbObject.db.data,
            })
        },
        getImpressum: () => {
            return queryDatabase({
                keys: [variants.impressum],
                db: dbObject.db.data,

            })
        },
        getCallToAction: () => {
            return queryDatabase({
                keys: [variants.cta],
                db: dbObject.db.data,

            })
        },

        db: createDatabase({
            id: meta.name,
            predicate: meta.predicate,
            shape: meta.shape,
            data: store
        })

    }

    return { ...dbObject }
}

export default meta

