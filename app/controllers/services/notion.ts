import { Client } from "@notionhq/client"


const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    databases: {
        media: '56249c8ad5af446995d711fb0c3291ae'
    },



    loadMedia: async () => {


        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.media,
        })

        return data
    },

    query: () => null
}


export default NotionService