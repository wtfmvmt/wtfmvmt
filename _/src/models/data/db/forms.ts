import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const forms = (store: NotionPageObjectType): DatabaseObjectType => {

    const { forms } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getForms: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: forms.name,
            predicate: forms.predicate,
            shape: forms.shape,
            data: store
        })
    }

    return { ...dbObject }


}

export default forms

