import FacadeService from "@services/facade"

const media = (store: []) => {

    const { media } = FacadeService().types

    const mediaObject = {
        getEventsAlbum: () => {
            const eventsAlbumKey = "📅Event"
            return mediaObject.getMedia().filter((event) => event.types.includes(eventsAlbumKey))
         },

        getMedia: () => {
            return store.filter((data) => {
                return media.predicate(data)
            }).map((data) => {
                return media.shape(data)
            })
        }

    }

    return { ...mediaObject }
}

export default media

