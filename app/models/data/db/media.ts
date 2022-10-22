import FacadeService from "@services/facade"

const media = (store: []) => {

    const { media } = FacadeService().types

    return {
        getEventsMedia: () => {},
        getMedia: () => {
            return store.filter((data) => {
                return media.predicate(data)
            }).map((data) => {
                return media.shape(data)
            })
        }

    }
}

export default media

