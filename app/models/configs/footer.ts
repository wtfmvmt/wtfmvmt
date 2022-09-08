import meta from "@configs/meta"


const footer = {

    init: () => {

        return {
            ...footer.data
        }
    },

    data: {
        impressum: meta.impressum,
        links: meta.links,
        copyright: meta.copyright,
        socials: meta.socials,
        logo: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        }
    }
}

export default footer
