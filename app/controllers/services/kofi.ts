import { Client } from "@notionhq/client"

const KofiService = () => {

    const serviceObject = {
        api: new Client({
            auth: process.env.FACADE_API_KEY ?? null,
        }),

        secured: {
            central_dogma: process.env.CENTRAL_DOGMA_ID ?? null,
        },

        getCentralDogma: async () => {
            const { api, secured } = serviceObject

            const { results, has_more, next_cursor } = (await api.databases.query({
                database_id: secured.central_dogma
            }))

            const aggregateDatabaseResults = () => {

                if(!has_more) {
                    return results
                }
            }


        },

    }

    return serviceObject
}


export default KofiService