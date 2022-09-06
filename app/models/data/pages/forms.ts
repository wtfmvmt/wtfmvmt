
import header from "@configs/header"
import footer from "@configs/footer"


const forms = {

    init: () => {
        return { ...forms.data }
    },


    data: {

        layout: {
            header: { ...header.init() },
            footer: { ...footer.init() },
            metaData: {
                pageTitle: 'Forms'
            }
        },

        forms: [
            {
                name: 'artists',
            }
        ]
    }
}

export default forms