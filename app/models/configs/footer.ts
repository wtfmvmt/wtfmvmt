import meta from "@configs/meta"


const footer = {

    init: () => {

        return {
            ...footer.data
        }
    },

    data: {
        impressum: meta.init().impressum,
        links: [
            {
                name: 'Vision',
                url: '/vision',
                icon: 'VISIBILITY'
            },
            {
                name: 'Media',
                url: '/media',
                icon: 'MEDIA'
            },
            {
                name: 'Artivism',
                url: '/artivism',
                icon: 'COLOR_LENS'
            },
            {
                name: 'Shop',
                url: '/shop',
                icon: 'STORE'
            },
            {
                name: 'Partners',
                url: '/partners',
                icon: 'HANDSHAKE'
            },
            {
                name: 'Team',
                url: '/team',
                icon: 'DIVERSITY'
            },
            {
                name: 'Blog',
                url: '/blog',
                icon: 'LIBRARY_BOOKS'
            },
            {
                name: 'Events',
                url: '/events',
                icon: 'EVENT'
            },

        ],
        copyright: meta.init().copyright,
        socials: meta.init().socials,
        logo: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
        }
    }
}

export default footer
