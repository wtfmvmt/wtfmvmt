const links = () => {

    const linksArray = [
        {
            name: 'Home',
            url: '/',
            type: 'internal',
            icon: 'house'
        },

        {
            name: "Facebook",
            url: "https://www.facebook.com/wtfmvmt/",
            type: 'social',
            icon: 'facebook'
        },
        {
            name: "Twitter",
            url: "https://twitter.com/wtfmvmt",
            type: 'social',
            icon: 'twitter'
        },

        {
            name: "Instagram",
            url: "https://www.instagram.com/wtfmvmt/",
            type: 'social',
            icon: 'instagram'
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/channel/UCBtwubo6hqRS3B_kF7aIu8g",
            type: 'social',
            icon: 'youtube'
        },
        {
            name: "Ko-fi",
            url: "https://www.ko-fi.com/wtfmvmt/",
            type: 'social',
            icon: 'coffee'
        },
        {
            name: "Memberships",
            url: "/memberships",
            type: 'internal',
            icon: 'visibility'
        },

        {
            name: "Vision",
            url: "/vision",
            type: 'internal',
            icon: 'instagram'
        },
        {
            name: "Media",
            url: "/media",
            type: 'internal',
            icon: 'pictures'
        },
        {
            name: "Artivism",
            url: "/artivism",
            type: 'internal',
            icon: 'coffee'
        },
        {
            name: "Shop",
            url: "/shop",
            type: 'internal',
            icon: 'facebook'
        },
        {
            name: "Partners",
            url: "/partners",
            type: 'internal',
            icon: 'handshake'
        },

        {
            name: "Community",
            url: "/community",
            type: 'internal',
            icon: 'coffee'
        },
        {
            name: "Blog",
            url: "/blog",
            type: 'internal',
            icon: 'books'
        },
        {
            name: "Events",
            url: "/events",
            type: 'internal',
            icon: 'events'
        },
    ]

    return linksArray ?? null
}

export default links