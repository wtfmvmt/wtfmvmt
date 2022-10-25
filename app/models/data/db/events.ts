import FacadeService from "@services/facade"

const events = (store: []) => {

    const { events } = FacadeService().types

    return {
        getEvents: () => {
            return store.filter((data) => {
                return events.predicate(data)
            }).map((data) => {
                return events.shape(data)
            })
        }

    }
}

export default events

