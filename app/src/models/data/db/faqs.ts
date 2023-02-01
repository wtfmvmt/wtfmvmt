import FacadeService from "@services/facade"
import { facade } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const faqs = (store: NotionPageObjectType): DatabaseObjectType => {

    const { faqs } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const dbObject = {

        getFAQs: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: faqs.name,
            predicate: faqs.predicate,
            shape: faqs.shape,
            data: store
        })


    }
    return { ...dbObject }
}

export default faqs

