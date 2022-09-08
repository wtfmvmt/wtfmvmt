import meta from "@configs/meta"

const menu = {
    favicon: {
        src: meta.logo,
        url: '/'
    },

    links: meta.links.splice(0,5),
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