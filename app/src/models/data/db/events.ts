import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const events = (store: NotionPageObjectType): DatabaseObjectType => {

    const { events, variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getEvents: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: events.name,
            shape: events.shape,
            predicate: events.predicate,
            data: store
        })
    }

    return { ...dbObject }
}

export default events

