import { Client } from "@notionhq/client"

const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    db: {
        MEDIA: {
            shape: (data: any) => {

                return {
                    id: data.properties.id.rich_text[0].plain_text,
                    key: data.properties.key.rich_text[0].plain_text,
      

                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
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