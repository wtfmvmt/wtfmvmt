import FacadeService from "@controllers/services/facade"

const siteMeta = (store: []) => {

    const { meta } = FacadeService().types

    return {
        id: 'SITE_META',
        getSiteMeta: () => {
            return store.filter((data) => {
                return meta.predicate(data)
            }).map((data) => {
                return meta.shape(data)
            })
        }

    }
}

export default siteMeta

