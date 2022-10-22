import { Client } from "@notionhq/client"

const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    getCentralDogma: async () => {
        const { api, secured } = NotionService
        const centralDogma = (await api.databases.query({
            database_id: secured.central_dogma
        }))?.results
        return centralDogma ?? null
    },

}


export default NotionService