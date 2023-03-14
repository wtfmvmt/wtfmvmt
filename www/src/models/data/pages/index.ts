import { defineViewStore } from "blakprint/dist/models"


const SitePages = defineViewStore({
    pages: {
        home: {},
        memberships: {},
        events: {},
        partners: {},
    },
    layout: {
        metaData: {},
        header: {},
        footer: {}
    }
})

export default SitePages



