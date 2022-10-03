import { Client } from "@notionhq/client"

const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    db: {

        PARTNERS: {
            shape: () =>{},
            predicate: () =>{},
        },
        MEDIA: {
            shape: (data: any) => {
                return {
                    alt: data?.properties?.Name?.title[0].plain_text,
                    src: data?.properties?.Media.files.map((file) => file.file.url),
                }
            },
            predicate: (data: any) => data?.properties?.Database?.select?.name === "📷Media" ?? null
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