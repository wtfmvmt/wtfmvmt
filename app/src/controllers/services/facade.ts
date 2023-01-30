import { notion } from "@configs/types"
import NotionService from "@services/notion"
import PageService from "@services/page"

const FacadeService = () => {

    const serviceObject = {
        version: Date.now(),
        types: {
            notion: notion()
        },
        services: {
            notion: NotionService(),
            page: PageService()
        }
    }

    return serviceObject
}

export default FacadeService