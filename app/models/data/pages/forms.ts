
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
                    heading: 'Newcomers',
                    title: 'Welcome Newcomers & Curious Minds!',
                    description: `Our membership program was created with the independent individual in mind. No matter where you are on the spectrum,
                                  we have opportunities for conscious creators of all kind to take advantage of. 
                                  As a bronze member, we aim to grow with you in pursuit of your skills and passions.`
                }
            },
            {
                name: 'vendors',
                titleSection: {
                    heading: 'Vendors',
                    title: 'Welcome Vendors & Entrepreneurs!',
                    description: 'Our membership program was created with the independent individual in mind. No matter where you are on the spectrum,'
                }
            },
            {
                name: 'businesses',
                titleSection: {
                    heading: 'Businesses',
                    title: 'Welcome Businesses & Organizations!',
                    description: 'Our membership program was created with the independent individual in mind. No matter where you are on the spectrum',
                    image: {
                        src: '/assets/images/business.svg'
                    }
                }
            },
       

        ]
    }
}

export default forms