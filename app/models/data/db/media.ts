import meta from "@configs/meta"
import NotionService from "@controllers/services/notion"



const media = () => {

    return {
        id: 'productsDataBase',
        version: `[Natures Secrets: Products]: ${Date.now()}`,
        getMedia: (store) => {
            return store.filter((data) => {
                return data?.properties?.Type?.select?.name === "🛍️Product"
            }).map((data) => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                }
            })

        }

    }
}

export default media

