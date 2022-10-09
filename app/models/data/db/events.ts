import meta from "@configs/meta"

import NotionService from "@services/notion"

const events = () => {

    const { title: siteTitle } = meta()

    return {
        id: 'EventsDatabase',
        version: `${siteTitle}: Events]@ ${Date.now()}`,
        getEvents: (store) => {

            const { EVENTS } = NotionService.db

            return store.filter((data) => {
                return EVENTS.predicate(data)
            }).map((data) => {
                return EVENTS.shape(data)
            })
        }

    }
}

export default events

