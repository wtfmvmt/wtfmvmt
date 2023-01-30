import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const partners = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants, partners } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getPartners: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: partners.name,
            predicate: partners.predicate,
            shape: partners.shape,
            data: store
        })
    }

    return dbObject
}

export default partners

