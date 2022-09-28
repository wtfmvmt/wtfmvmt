const links = () => {

    const linksData = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/wtfmvmt/",
            type: "social-media"

        },
        {
            name: "Twitter",
            url: "https://twitter.com/wtfmvmt",
            type: "social-media"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/wtfmvmt/",
            type: "social-media"
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/channel/UCBtwubo6hqRS3B_kF7aIu8g",
            type: "social-media"
        },
        {
            name: "Ko-fi",
            url: "https://www.ko-fi.com/wtfmvmt/",
            type: "social-media"
        },
        {
            name: "Home",
            url: "/",
            type: "site-page"
        },
        {
            name: 'Sponsorships',
            url: '/partners'
        },
        {
            name: "For Artists",
            url: "forms/artists",
            icon: 'COLOR_LENS',
            type: "form-page"
        },
        {
            name: "For Newcomers",
            url: "forms/newcomers",
            icon: 'NEW',
            type: "form-page"
        },
        {
            name: "For Businesses",
            url: "forms/businesses",
            icon: 'DOMAIN',
            type: "form-page"
        },
        {
            name: "For Vendors",
            url: "forms/vendors",
            icon: 'VENDOR',
            type: "form-page"
        },
        {
            name: "Just RSVP",
            url: "rsvp",
            icon: 'VENDOR',
            type: "form-page"
        },
        {
            name: 'Join Us',
            url: '/forms',
            type: "form-page"
        },

        {
            name: 'Vision',
            url: '/vision',
            icon: 'VISIBILITY'

        },
        {
            name: 'Media',
            url: '/media',
            icon: 'MEDIA',
            type: "site-page"
        },
        {
            name: 'Artivism',
            url: '/artivism',
            icon: 'COLOR_LENS',
        },
        {
            name: 'Shop',
            url: '/shop',
            icon: 'STORE',
            type: "site-page"
        },
        {
            name: 'Partners',
            url: '/partners',
            icon: 'HANDSHAKE',
            type: "site-page"
        },
        {
            name: 'Community',
            url: '/community',
            icon: 'DIVERSITY',
            type: "site-page"
        },
        {
            name: 'Blog',
            url: '/blog',
            icon: 'LIBRARY_BOOKS',
            type: "site-page"
        },
        {
            name: 'Events',
            url: '/events',
            icon: 'EVENT',
            type: "site-page"
        },
    ]

    return [...linksData]
}

export default links