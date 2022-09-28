import { Client } from "@notionhq/client"
import meta from "@configs/meta"



const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    interface: () => {
        const { url } = meta()
        const template = `${process.env.NODE_ENV === "production" ? `${url}/api/notion` : `http://localhost:${process.env.PORT || 3002}/api/notion`}`
        return template
    },

    db: {
        MEDIA: {
            shape: (data: any) => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    media: data?.properties?.Media?.files.map((file: any) => file.url),
                    date: data?.properties?.Date?.date?.start,
                    status: data?.properties?.Status?.select?.name,
                    facebook: data?.properties?.Facebook?.url,
                    description: data?.properties?.Description?.rich_text[0].text.content,
                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
        },
        BLOG: {
            shape: (data: any): MediaProps => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    description: data?.properties?.Description?.rich_text[0].text.content,
                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
        },
        EVENTS: {
            shape: (data: any): MediaProps => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    description: data?.properties?.Description?.rich_text[0].text.content,
                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
        },
        FORMS: {
            shape: (data: any): MediaProps => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    description: data?.properties?.Description?.rich_text[0].text.content,
                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
        },
        PARTNERS: {
            shape: (data: any): MediaProps => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    description: data?.properties?.Description?.rich_text[0].text.content,
                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
        },
        MEMBERSHIPS: {
            shape: (data: any): MediaProps => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    description: data?.properties?.Description?.rich_text[0].text.content,
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