import meta from "@configs/meta"
import NotionService from "@services/notion"



const forms = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'FormsDataBase',
        version: `${siteTitle}: FormsDataBase]@ ${Date.now()}`,
        getForms: (store) => {

            const { FORMS } = NotionService.db

            return store.filter((data) => {
                return FORMS.predicate(data)
            }).map((data) => {
                return FORMS.shape(data)
            })
        }

    }
}

export default forms

