import meta from "@models/data/db/meta"
import NotionService from "@controllers/services/notion"



const partners = (store: []) => {

    const { title: siteTitle } = meta()

    return {
        id: 'PartnersDatabase',
        version: `${siteTitle}: PARTNERS]@ ${Date.now()}`,
        getPartners: (store) => {

            const { PARTNERS } = NotionService.db

            return store.filter((data) => {
                return PARTNERS.predicate(data)
            }).map((data) => {
                return PARTNERS.shape(data)
            })
        }

    }
}

export default partners

