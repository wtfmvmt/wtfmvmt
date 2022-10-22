import FacadeService from "@services/facade"

const siteMeta = (store: []) => {

    const { meta } = FacadeService().types

    const siteMetaObject = {
        getFavicon: () => { },
        getSiteLinks: () => {},
        getCopyright: () => {

        },
        getImpressum: () => { },
        getAudienceHook: () => { },
        getFormBanner: () => { },
        getSiteTitle: () => {
            return siteMetaObject.getSiteMeta().find((meta) => meta.types.includes("Title"))


        },
        getSiteMeta: () => {
            return store.filter((data) => {
                return meta.predicate(data)
            }).map((data) => {
                return meta.shape(data)
            })
        }

    }

    return { ...siteMetaObject }
}

export default siteMeta

