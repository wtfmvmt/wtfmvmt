import meta from "@configs/meta"

const menu = () => {
    

    return {
        favicon: {
            src: meta.init().logo,
            url: '/'
        },

        links: [...meta.init().links],
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