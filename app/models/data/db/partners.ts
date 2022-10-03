import meta from "@configs/meta"
import NotionService from "@controllers/services/notion"



const partners = () => {

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

