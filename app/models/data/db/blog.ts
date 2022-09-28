import NotionService from "@services/notion"
import meta from "@configs/meta"

const blog = () => {

    const { db: { BLOG } } = NotionService

    const siteTitle = meta().title

    return {
        id: 'blogDataBase',
        version: `[${siteTitle}: Media]: ${Date.now()}`,
        methods: {
            getMedia: (store) => {

                const filterStoreData = store.filter((data) => {
                    return BLOG.predicate(data)
                }).map((data) => {
                    return { ...BLOG.shape(data) }
                })
 
                return filterStoreData

            }
        }
    }

}

export default blog