import FacadeService from "@services/facade";

const meta = (store: []) => {

    const { meta } = FacadeService().types

    const metaObject = {
        getSearch: () => {
            const searchKey = "🔎Search"
            return metaObject.getMeta().find((meta) => meta?.types?.includes(searchKey)) ?? null
        },
        getTitle: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📛Title")) ?? null
        },
        getCopyright: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📜Copyright")) ?? null
        },
        getEmailAddress: () => {
            return metaObject.getMeta().find((meta) => meta?.types?.includes("📧Email")) ?? null
        },
        getBanner: () => {
            const bannerKey = "🪧Banner"
            return metaObject.getMeta().find((meta) => meta?.types?.includes(bannerKey)) ?? null
        },
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
            const callToActionKey = "🔔Call to Action"
            return metaObject.getMeta().find((meta) => meta?.types?.includes(callToActionKey)) ?? null
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
