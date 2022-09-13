import meta from "@configs/meta"


const footer = {

    init: () => {

        return {
            ...footer.data
        }
    },

    data: {
        impressum: meta.init().impressum,
        links: meta.init().links,
        copyright: [...meta.init().copyright],
        socials: meta.init().socials,
        logo: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        }
    }
}

export default footer
