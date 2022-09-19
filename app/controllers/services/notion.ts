import { Client } from "@notionhq/client"


const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    databases: {
        media: '56249c8ad5af446995d711fb0c3291ae',
        events: '824b76cf856345d19debb747fd1cc963',
        partners: ''
    },

    loadAllEvents: async () => {
        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.events,
        })

        return data
    },

    loadAllPartners: async () => {
        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.partners,
        })

        return data
        
    },

    loadAllMedia: async () => {

        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.media,
        })

        return data
    },
}


export default NotionService