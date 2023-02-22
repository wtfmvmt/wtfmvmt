import FacadeService from "@services/facade"
import { facade } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const links = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants, links } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const dbObject = {

        getLinks: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: links.name,
            predicate: links.predicate,
            shape: links.shape,
            data: store
        })
    }

    return { ...dbObject }
}

export default links

