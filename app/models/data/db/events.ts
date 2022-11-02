import FacadeService from "@services/facade"

const events = (store: []) => {

    const { events } = FacadeService().types

    const eventsObject = {
        getEventsAlbum: () => {
            const eventsAlbumKey = "📅Event"
            return eventsObject.getEvents().filter((event) => event.types.includes(eventsAlbumKey))
         },
        getEvents: () => {
            return store.filter((data) => {
                return events.predicate(data)
            }).map((data) => {
                return events.shape(data)
            })
        }

    }
    return { ...eventsObject }
}

export default events

