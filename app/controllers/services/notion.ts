import { Client } from "@notionhq/client"


const FacadeService = {
    api:  new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    query: () => null
}


export default FacadeService