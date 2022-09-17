import { Client } from "@notionhq/client"


const NotionService = {

    api:  new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    test: () => {

        return NotionService.api.users({})
    },

    query: () => null
}


export default NotionService