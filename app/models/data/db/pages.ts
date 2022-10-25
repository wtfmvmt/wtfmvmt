import meta from "@models/data/db/meta"
import NotionService from "@controllers/services/notion"



const sitePages = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'SitePagesDatabase',
        version: `${siteTitle}: SITE_PAGES]@ ${Date.now()}`,
        getSitePages: (store) => {

            const { SITE_PAGES } = NotionService.db

            return store.filter((data) => {
                return SITE_PAGES.predicate(data)
            }).map((data) => {
                return SITE_PAGES.shape(data)
            })
        }

    }
}

export default sitePages

