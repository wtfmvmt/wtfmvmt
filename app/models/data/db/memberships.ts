import meta from "@configs/meta"
import NotionService from "@services/notion"

const memberships = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'MembershipsDatabase',
        version: `${siteTitle}: Memberships]@ ${Date.now()}`,
        getMemberships: (store) => {

            const { MEMBERSHIPS } = NotionService.db

            return store.filter((data) => {
                return MEMBERSHIPS.predicate(data)
            }).map((data) => {
                return MEMBERSHIPS.shape(data)
            })
        }

    }
}

export default memberships

