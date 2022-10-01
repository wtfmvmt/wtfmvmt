import meta from "@configs/meta"

const menu = () => {
    

    return {
        favicon: {
            src: meta().logo,
            url: '/'
        },

        links: [...meta().links],
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