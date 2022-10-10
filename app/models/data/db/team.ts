import meta from "@configs/meta"
import NotionService from "@controllers/services/notion"



const team = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'TeamDatabase',
        version: `${siteTitle}: TEAM]@ ${Date.now()}`,
        getPartners: (store) => {

            const { TEAM } = NotionService.db

            return store.filter((data) => {
                return TEAM.predicate(data)
            }).map((data) => {
                return TEAM.shape(data)
            })
        }

    }
}

export default team

