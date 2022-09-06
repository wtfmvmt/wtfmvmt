import header from "@configs/header"
import footer from "@configs/footer"



const formsPage = {

    init: () => {

        return { ...formsPage.data }

    },

    data: {
        layout: {
            metaData: {
                pageTitle: 'Forms'
            },
            header: { ...header.init() },
            footer: { ...footer.init() },

        }
    },

    query: {

    }
}


export default formsPage