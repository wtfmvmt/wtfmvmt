import meta from "@configs/meta"

const menu = ({ links }) => {
    

    return {
        favicon: {
            src: meta().logo.src,
            url: '/'
        },

        links,
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
}

export default menu