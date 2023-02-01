import FacadeService from "@services/facade"
import { facade } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const events = (store: NotionPageObjectType): DatabaseObjectType => {

    const { events, variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const _database = {

        getEvents: () => {
            return _database.db.data
        },

        db: createDatabase({
            id: events.name,
            shape: events.shape,
            predicate: events.predicate,
            data: store
        })
    }

    return _database
}

export default events

