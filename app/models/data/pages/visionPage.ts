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
        },
        post: {
            date: '2020-01-01',
            title: 'Our Vision',
            author: 'WTF Team',
            subTitle: 'Our mission for the future',
            tags: ["vision", "mission", "future"],
            text: `We are a community of artists, builders and thinkers who are passionate
            about building a better future. We believe that creativity and
            collaboration are the key to making progress, and we are committed to
            using our skills to make a difference. Whether it's creating new
            technology, building sustainable infrastructure or advocating for
            change, we are determined to leave our world in a better place than we
            found it.`
        }
    }
}

export default visionPage