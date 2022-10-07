import { Client } from "@notionhq/client"

const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    db: {

        MEMBERSHIPS: {
            shape: (data) => { 
                const shapeObject = {
                    title: data?.properties?.Name?.title[0]?.plain_text,
                    cost: data?.properties?.Cost?.number,
                    features: data?.properties?.Features?.multi_select.map((feature) => feature.name),
                }

                return { ...shapeObject } ?? null
            },
            predicate: (data) => {
                return data?.properties?.Database?.select?.name === '👥Memberships'

            },
        },

        FORMS: {
            shape: (data) => {

                const shapeObject = {
                    title: data?.properties?.Name?.title[0]?.plain_text,
                    url: data?.properties?.URL?.url ?? null,
                }


                return { ...shapeObject }
            },

            predicate: (data) => data?.properties?.Database?.select?.name === '📜Forms'
        },

        PARTNERS: {
            shape: (data) => { },
            predicate: (data) => { },
        },
        MEDIA: {
            shape: (data: any) => {
                return {
                    alt: data?.properties?.Name?.title[0].plain_text,
                    src: data?.properties?.Media.files.map((file) => file.file.url),
                }
            },
            predicate: (data: any) => data?.properties?.Database?.select?.name === "📷Media" && data?.properties?.Media?.files.length > 0
        },

    },

    loadCentralDogma: async () => {

        const { api, secured } = NotionService

        const centralDogma = await api.databases.query({
            database_id: secured.central_dogma
        })

        return centralDogma
    },

}


export default NotionService