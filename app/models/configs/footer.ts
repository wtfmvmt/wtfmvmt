import meta from "@configs/meta"


const footer = {

    init: () => {

        return {
            ...footer.data
        }
    },

    data: {
        impressum: meta.impressum,
        links: [
            {
                name: 'Vision',
                url: '/vision'
            },
            {
                name: 'Media',
                url: '/media'
            },
            {
                name: 'Team',
                url: '/team'
            },
            {
                name: 'Blog',
                url: '/blog',
            },
            {
                name: 'Events',
                url: '/events'
            },
            {
                name: 'Artivism',
                url: '/artivism',
            },
            {
                name: 'Shop',
                url: '/shop',
            }

        ],
        copyright: meta.copyright,
        socials: meta.socials,
        logo: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        }
    }
}

export default footer
