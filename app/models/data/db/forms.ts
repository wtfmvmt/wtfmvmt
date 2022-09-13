const forms = [

    {
        name: 'artists',
        titleSection: {
            url: '/artists',
            cta: {
                name: 'Join Now',
                url: '/membership'
            },
            heading: 'Artists',
            title: 'Welcome Artists & Musicians!',
            image: {
                src: "/assets/images/woman-artist.svg",
            }
        },
        fields: []
    },

    {
        name: 'newcomers',
        titleSection: {
            url: '/newcomers',
            heading: 'Newcomers',
            title: 'Welcome Newcomers & Curious Minds!',
            image: {
                src: '/assets/images/newcomer.svg'
            },
            cta: {
                name: 'Join Now',
                url: '/membership'
            }
        },
        fields: [
            {
                title: 'Who are you?',
            }
        ]
    },
    {
        name: 'vendors',
        titleSection: {
            cta: {
                name: 'Join Now',
                url: '/membership'
            },
            url: '/vendors',
            heading: 'Vendors',
            title: 'Welcome Vendors & Entrepreneurs!',
        }
    },
    {
        name: 'businesses',
        titleSection: {
            cta: {
                name: 'Join Now',
                url: '/membership'
            },
            url: '/businesses',
            heading: 'Businesses',
            title: 'Welcome Businesses & Organizations!',
            image: {
                src: '/assets/images/business.svg'
            }
        }
    },



]

export default forms