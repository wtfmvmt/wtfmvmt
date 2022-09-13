
import header from "@configs/header"
import footer from "@configs/footer"
import { default as formData } from "@db/forms"

const formPages = {

    init: () => {
        return { ...formPages.data }
    },

    data: {
        layout: {
            header: { ...header.init() },
            footer: { ...footer.init() },
            metaData: {
                pageTitle: 'Forms'
            }
        },

        forms: [...formData]

    }
}

export default formPages