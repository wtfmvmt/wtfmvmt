import meta from "@configs/meta"

const menu = {
    favicon: {
        src: meta.init().logo,
        url: '/'
    },

    links: [...meta.init().links.splice(0,5)],
    cta: [
        {
            name: 'Sponsorships',
            url: '/partners'
        },
        {
            name: 'Join Us',
            url: '/forms'
        }
    ]
}

export default menu