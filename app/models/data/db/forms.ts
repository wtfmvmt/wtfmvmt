import NotionService from "@services/notion"
import meta from "@configs/meta"


const forms = () => {

    const { db: { FORMS } } = NotionService

    const siteTitle = meta().title


    return {
        id: 'formsDataBase',
        version: `[${siteTitle}: Media]: ${Date.now()}`,
        methods: {
            getMedia: (store) => {

                const filterStoreData = store.filter((data) => {
                    return FORMS.predicate(data)
                }).map((data) => {
                    return { ...FORMS.shape(data) }
                })

                return filterStoreData

            }
        }
    }

}

export default forms