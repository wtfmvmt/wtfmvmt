const meta = {

    init: () => {

        return { ...meta.data }
    },

    data: {
        title: 'WTFMVMT',
        description: ['We are a Community of Conscious Builders for the Future',],
        logo: '/assets/images/logo-transparent.png',
        impressum: "We are Conscious Creators for The Future",
        copyright: ['©️ 2022 WTFMVMT. All Rights Reserved.',
            'Powered by WTFMVMT Technologies & Love',
            'Site by Desirable Solutions'],
        phone: '321-350-5177',
        email: 'info@wtfmvmt.com',
        links: [
            {
                name: 'Memberships',
                url: '/memberships',

            },
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
                name: 'Community',
                url: '/community',
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
        socials: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/wtfmvmt/",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/wtfmvmt",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/wtfmvmt/",
            },
            {
                name: "Youtube",
                url: "https://www.youtube.com/channel/UCBtwubo6hqRS3B_kF7aIu8g",
            },
            {
                name: "Ko-fi",
                url: "https://www.ko-fi.com/wtfmvmt/",
            },
        ]
    }
}

export default meta