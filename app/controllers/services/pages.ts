import pages from "@db/pages"
import NotionService from "@services/notion"
import meta from "@configs/meta"

import type { DataPageProps } from "@typings/DataPage"
import type { Service } from "@typings/Service"


const PageService: Service = {

    loadDataPage: (store?: any[], pageKey?: string) => {
        return pages({ store: store[0], pageKey })
    },

    getPage: async (pageKey: string) => {

        const { loadDataPage } = PageService
        const { loadCentralDogma } = NotionService

        const centralDogma = (await loadCentralDogma()).results

        const { layout, data, id, version } = loadDataPage([centralDogma], pageKey ? pageKey : "home")

        const { title: siteName } = meta()

        const dataPage: DataPageProps = {
            id: `${siteName}: [pages] ${id}`,
            db: id,
            version,
            layout,
            ...data,
        }

        return dataPage
    },

}




export default PageService

