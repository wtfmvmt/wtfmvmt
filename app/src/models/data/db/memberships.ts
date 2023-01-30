import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const memberships = (store: NotionPageObjectType): DatabaseObjectType => {

    const { memberships, variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getMemberships: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: memberships.name,
            predicate: memberships.predicate,
            shape: memberships.shape,
            data: store
        })
    }

    return { ...dbObject }
}

export default memberships

