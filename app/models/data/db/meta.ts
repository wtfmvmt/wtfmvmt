import FacadeService from "@services/facade";

const meta = (store: []) => {

    const { meta } = FacadeService().types

    const metaObject = {
        getTitle: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📛Title")) ?? null
        },
        getCopyright: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📜Copyright")) ?? null
        },
        getEmailAddress: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📧Email")) ?? null
        },
        getSiteLinks: () => { },
        getFavicon: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("🖼️Favicon")) ?? null
        },
        getImpressum: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("✒️Impressum")) ?? null
        },
        getAudienceHook: () => {
            return true
        },
        getCallToAction: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📣Call to Action")) ?? null
        },
        getMeta: () => {
            return store?.filter((data) => {
                return meta?.predicate(data)
            }).map((data: []) => {
                return meta?.shape(data)
            })
        }
    }

    return { ...metaObject }
}

export default meta

