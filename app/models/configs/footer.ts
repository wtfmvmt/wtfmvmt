import meta from "@configs/meta"

const footer = {

    init: () => {

        return {
            ...footer.data
        }
    },

    data: {
        impressum: "Conscious Creators for The Future",
        copyright: " © 2022 WTFMVMT. All rights reserved.",
        socials: meta.socials,
        logo: {
            src: '/assets/images/logo-transparent.png',
            url: '/'
            

        }
    }
}

export default footer
