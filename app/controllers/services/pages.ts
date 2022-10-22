import NotionService from '@services/notion'
import pages from "@pages/index"

const PageService = {

    getLayout: async (pageKey?: string) => {

        const { getCentralDogma } = NotionService

        const centralDogma = (await getCentralDogma())

        const { layout } = pages({ store: centralDogma, key: pageKey })

        return layout

    },

    getPage: async (pageKey: string) => {

        const { getCentralDogma } = NotionService

        const centralDogma = (await getCentralDogma())

        const { layout, data, version } = pages({ store: centralDogma, key: pageKey })

        const page = {
            version,
            layout,
            data
        }

        return page

    },

}


export default PageService

