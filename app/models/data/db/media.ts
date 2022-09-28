import NotionService from "@services/notion"


const media = () => {

    const { db: { MEDIA } } = NotionService

    return {
        id: 'mediaDataBase',
        version: `[WTFMVMT: Media]: ${Date.now()}`,
        methods: {
            getMedia: (store) => {

                const filterStoreData = Array.from(store).filter((data) => {
                    return MEDIA.predicate(data)
                }).map((data) => {
                    return { ...MEDIA.shape(data) }
                })

                return filterStoreData

            }
        }
    }

}

export default media