const footer = {

    init: () => {

        return {
            ...footer.data
        }
    },

    data: {
        impressum: "Conscious Creators for The Future",
        copyright: " © 2022 WTFMVMT. All rights reserved.",
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
                url: "https://www.youtube.com/channel/UC-q-_X-_XD-yXvQNX-_QZQQ",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/wtfmvmt/",
            },


        ],
        logo: {
            url: '/',
            src: '/assets/images/logo.png',
        }
    }
}

export default footer
