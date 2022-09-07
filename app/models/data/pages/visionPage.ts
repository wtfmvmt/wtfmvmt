import header from "@models/configs/header"
import footer from "@models/configs/footer"

const visionPage = {
    init: () => {
        return { ...visionPage.data }
    },
    data: {
        layout: {
            metaData: {
                pageTitle: 'Vision'
            },
            header: { ...header.init() },
            footer: { ...footer.init() },
        }
    }
}

export default visionPage