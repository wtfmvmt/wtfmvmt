import FacadeService from "@services/facade"
import { facade } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const socialMedia = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants, social_media } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const dbObject = {

        getSocialMedia: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: social_media.name,
            predicate: social_media.predicate,
            shape: social_media.shape,
            data: store
        })
    }

    return { ...dbObject }
}

export default socialMedia

