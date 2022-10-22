import meta from "@configs/meta"



const events = (store: []) => {

    const { title: siteTitle } = meta()

    return {
        id: 'EventsDatabase',
        version: `${siteTitle}: Events]@ ${Date.now()}`,
        getEvents: (store) => {



            return store.filter((data) => {
                return EVENTS.predicate(data)
            }).map((data) => {
                return EVENTS.shape(data)
            })
        }

    }
}

export default events

