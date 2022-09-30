import pages from "@db/pages"
import NotionService from '@services/notion'

const PageService = {

    loadDataPage: (store?: any, pageKey?: string) => {
        return pages(store, pageKey)
    },

    getPage: async (pageKey: string) => {

        const { loadDataPage } = PageService
        const { loadCentralDogma } = NotionService

        const centralDogma = (await loadCentralDogma()).results
    },
        loadPage: (pageKey: string) => {
            return PageService.data.pages[pageKey]
        },

            getLayout: () => {
                return PageService.data.layout
            },

        const { layout, data, id, version } = loadDataPage(centralDogma, pageKey ? pageKey : "home")


        const page = {
            id: 'wtfmvmt-pages',
            db: id,
            version: version,
            layout: layout,
            ...data,
            resolveQuery: async (query) => {

                return Object.fromEntries(
                    await Object.entries(query).map(([key, value]: [string, Function]) => {
                        return [key, value()]
                    })
                )
            }

        return page

        },

    }



}
export default PageService

