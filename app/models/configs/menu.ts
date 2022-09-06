import meta from "@configs/meta"

const menu = {

    favicon: {
        src: meta.logo,
        url: '/'
    },
    links: meta.links,
    cta: [
        {
            name: 'Message Us',
            url: '/community'
        },
        {
            name: 'Surprise Me...',
            url: '/contact'
        }
    ]
}

export default menu