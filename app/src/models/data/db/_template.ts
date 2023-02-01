import FacadeService from "@services/facade";
import type { DatabaseObjectType } from "@typings/Data";
import type { NotionPageObjectType } from "@typings/Notion";
import { facade } from "@utils/index";

const _template = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const dbObject = {

        getTemplate: () => {

            return dbObject.db.data
        },

        db: createDatabase({
            data: store
        })

    }

    return { ...dbObject }
}

export default _template

