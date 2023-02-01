import FacadeService from "@services/facade"
import { facade } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const media = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants, media } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = facade()

    const dbObject = {

        getPhotos: () => {
            return queryDatabase({
                keys: [variants.photo],
                db: dbObject.db.data,
                batch: true
            })
        },

        getMedia: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: media.name,
            predicate: media.predicate,
            shape: media.shape,
            data: store
        })
    }

    return dbObject
}

export default media

