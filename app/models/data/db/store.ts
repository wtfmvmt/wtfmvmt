import meta from "@configs/meta"

import NotionService from "@services/notion"

const siteMeta = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'SiteMetaDatabase',
        version: `${siteTitle}: Site Meta]@ ${Date.now()}`,
        getSiteMeta: (store) => {

            const { META } = NotionService.db

            return store.filter((data) => {
                return META.predicate(data)
            }).map((data) => {
                return META.shape(data)
            })
        }

    }
}

export default siteMeta

