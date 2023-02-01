import FacadeService from "@services/facade"
import { facade } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"


const team = (store: NotionPageObjectType): DatabaseObjectType => {

    const { team, variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const dbObject = {

        getTeam: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            data: store,
            predicate: team.predicate,
            shape: team.shape,
            id: team.name
        })
    }

    return { ...dbObject }
}


export default team

