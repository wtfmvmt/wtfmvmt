import NotionService from '@services/notion'

import pages from "@pages/index"
import meta from "@configs/meta"


const PageService = {

    loadDataPage: (store?: any, pageKey?: string) => {
        return pages({ store, pageKey })
    },

    getLayout: async (pageKey?: string) => {
        const { loadDataPage } = PageService
        const { getCentralDogma } = NotionService

        const centralDogma = (await getCentralDogma())

        const { layout } = loadDataPage(centralDogma, pageKey)

        return layout

    },

    getPage: async (pageKey: string) => {

        const { title: siteTitle } = meta()

        const { loadDataPage } = PageService
        const { getCentralDogma } = NotionService

        const centralDogma = (await getCentralDogma())

        const { layout, data, id, version } = loadDataPage(centralDogma, pageKey ? pageKey : "home")


        const page = {
            id: `${siteTitle}-pages`,
            db: id,
            version: version,
            layout: layout,
            ...data,
        }

        return page

    },

}




export default PageService

