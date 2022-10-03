import meta from "@configs/meta"
import NotionService from "@controllers/services/notion"

const media = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'MediaDatabase',
        version: `${siteTitle}: MEDIA]@ ${Date.now()}`,
        getMedia: (store) => {

            const { MEDIA } = NotionService.db

            return store.filter((data) => {
                return MEDIA.predicate(data)
            }).map((data) => {
                return MEDIA.shape(data)
            })
        }

    }
}

export default media

