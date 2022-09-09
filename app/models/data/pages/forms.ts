
import header from "@configs/header"
import footer from "@configs/footer"

const forms = {

    init: () => {
        return { ...forms.data }
    },

    data: {
        layout: {
            header: { ...header.init() },
            footer: { ...footer.init() },
            metaData: {
                pageTitle: 'Forms'
            }
        },

        forms: [
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
                fields: [
                    {
                        id: 'firstName',
                        type: 'text',
                        label: 'First Name',
                    },
                    {
                        id: 'lastName',
                        type: 'text',
                        label: 'Last Name',
                    },
                    {
                        id: 'email',
                        type: 'text',
                        label: 'Email',
                    },
                    {
                        id: 'phone',
                        type: 'text',
                        label: 'Phone',
                    }
                ]
            },

            {
                name: 'newcomers',
                titleSection: {
                    url:'/newcomers',
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
                        forms: [

                        ]
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
    }
}

export default forms