import NotionService from "@services/notion"


const partners = () => {

    const { db: { PARTNERS } } = NotionService

    return {
        id: 'partnersDataBase',
        version: `[WTFMVMT: Media]: ${Date.now()}`,
        methods: {
            getMedia: (store) => {

                const filterStoreData = store.filter((data) => {
                    return PARTNERS.predicate(data)
                }).map((data) => {
                    return { ...PARTNERS.shape(data) }
                })
 
                return filterStoreData

            }
        }
    }

}

export default partners