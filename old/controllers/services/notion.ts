import { Client } from "@notionhq/client"

const NotionService = () => {

    const serviceObject = {

        api: new Client({
            auth: process.env.FACADE_API_KEY,
        }),

        secured: {
            central_dogma: process.env.CENTRAL_DOGMA_ID,
        },

        getCentralDogma: async () => {

            const queryCentralDogma = async ({ cursor, aggResults }: { cursor?: string | undefined, aggResults?: any[] }) => {
                const { api, secured } = serviceObject

                let aggregateResults: any[] = []

                const { has_more, next_cursor, results } = await api.databases.query({
                    database_id: secured.central_dogma,
                    page_size: 100,
                    start_cursor: cursor,
                })

                aggregateResults.push(...results, ...aggResults)

                if (!has_more) {
                    return aggregateResults
                } else {
                    return queryCentralDogma({ cursor: next_cursor, aggResults: aggregateResults })
                }
            }

            return await queryCentralDogma({ cursor: undefined, aggResults: [] })
        },

    }

    return { ...serviceObject }
}


export default NotionService
