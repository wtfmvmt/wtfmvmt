import footer from "@configs/footer";
import header from "@configs/header";
import meta from "@configs/meta";
<<<<<<< HEAD
import layout from "@configs/layout";
import media from "@db/media"

export type PageData = {
    store: any,
    pageKey: string,
}

const pages = ({ store, pageKey }: PageData) => {

    const siteSocialLinks = meta().socials

    const pageData = {

        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: [
                {
                    component: $Hero,
                    props: async () => {

                        const data = await media.methods.getImages()

                        return {
                            id: 'WTFMVMT-HERO',
                            version: Date.now(),
                            payload: data,
                            title: "WTFMVMT",
                            description: meta().description,
                            mediaCarousel: ['carouselImages'],
                            heading: "The Community Development Movement",
                            cta: {
                                name: "Join the Movement",
                                url: "/memberships",
                                icon: "SchoolIcon"
                            },
                            socialLinks: meta().socials,
                            features: {
                                heading: 'Featured Affiliates & Partners',
                                featured: [
                                    {
                                        name: 'Serenitys Grace',
                                        url: '/parterns/serenitys-grace',
                                        image: {
                                            src: '/assets/images/serenitys-grace-logo.png',
                                            alt: ''
                                        }
                                    },
                                    {
                                        name: "WTF Media",
                                        url: 'https://mountaintopentertainmentgroup.com/',
                                        image: {
                                            src: '/assets/images/wtfmedia-logo.png',
                                            alt: ''
                                        }
                                    },
=======
import images from "@db/images";
import media from "@db/media";

import partners from "@db/partners";

const pages = {

    layout: {
        metaData: {
            pageTitle: "Love Thy Neighbor",
        },
        header: { ...header.init() },
        footer: { ...footer.init() },
    },
>>>>>>> parent of c1fb380 ([ begun ])

    home: {
        query: {
            hero: () => {


                const carouselImages = new Promise(async resolve => {
                    await resolve(await media.methods.getImages())
                })

                return {
                    id: 'WTFMVMT-HERO',
                    version: Date.now(),
                    title: meta.init().title,
                    description: meta.init().description,
                    mediaCarousel: ['carouselImages', carouselImages],
                    heading: "The Community Development Movement",
                    cta: {
                        name: "Join the Movement",
                        url: "/memberships",
                        icon: "SchoolIcon"
                    },
                    socialLinks: meta.init().socials,
                    features: {
                        heading: 'Featured Affiliates & Partners',
                        featured: [
                            {
                                name: 'Serenitys Grace',
                                url: '/parterns/serenitys-grace',
                                image: {
                                    src: '/assets/images/serenitys-grace-logo.png',
                                    alt: ''
                                }
                            },
                            {
                                name: "WTF Media",
                                url: 'https://mountaintopentertainmentgroup.com/',
                                image: {
                                    src: '/assets/images/wtfmedia-logo.png',
                                    alt: ''
                                }
                            },

                            {
                                name: 'Mountain Top Entertainment Group',
                                url: 'partners/mountaintop-entertainment-group',
                                image: {
                                    src: '/assets/images/mountaintop-entertainment-group-logo.png',
                                    alt: ''
                                }
                            },
                            {
                                name: 'Desirable Solutions',
                                url: 'partners/desirable-solutions',
                                image: {
                                    src: '/assets/images/desirable-solutions-logo.png',
                                    alt: ''
                                }
                            },
                            {

                                name: 'Keith Andes',
                                url: 'partners/keith-andes',
                                image: {
                                    src: '/assets/images/keith-andes-logo.png',
                                    alt: ''
                                }
                            },
                            {
                                name: 'Dianh Perry Art',
                                url: 'https://mountaintopentertainmentgroup.com/',
                                image: {
                                    src: '/assets/images/diahnn-perry-logo.png',
                                    alt: ''
                                }
                            },
                            {
                                name: 'Divergent U',
                                url: 'partners/divergent-u',
                                image: {
                                    src: '/assets/images/divergent-u-logo.png',
                                    alt: ''
                                }
                            },
                        ]

                    },
                    actionLinks: {
                        title: "The Community Development Movement",
                        links: [
                            {
                                name: "For Artists",
                                url: "forms/artists",
                                icon: 'COLOR_LENS'
                            },
                            {
                                name: "For Newcomers",
                                url: "forms/newcomers",
                                icon: 'NEW'
                            },
                            {
                                name: "For Businesses",
                                url: "forms/businesses",
                                icon: 'DOMAIN'
                            },
                            {
                                name: "For Vendors",
                                url: "forms/vendors",
                                icon: 'VENDOR'
                            },
                            {
                                name: "Just RSVP",
                                url: "rsvp",
                                icon: 'VENDOR'
                            },
                        ]
                    }
                }
            },
            dataSection: () => {
                return {
                    heading: 'Check out our Media & Publication',
                    title: 'Media & Projects',
                    description: `Our publication & media showcases the experience & knowledge
                                  of artists, designers, and activists who are dedicated to 
                                  creating a better world through service or Artivism.`,
                    data: [
                        {
                            title: 'WTF is WTF?'
                        },





                    ]

                }
            },
            imageMasonry: () => {
                return {

                    heading: "Our Founders and Team",
                    title: 'Who we are',
                    cta: {
                        primary: {
                            name: 'Read our Vision'
                        },
                        secondary: {
                            name: 'Join our Community'
                        }
                    },
                    description: 'Our core team is made up of a group of passionate individuals who are dedicated to making a difference in the world. We are a diverse group of people from different backgrounds, cultures, and experiences. We are united by our common goal of making a positive impact on the world.',
                    masonry: {
                        major: [

                            {
                                title: 'Brandon J. Payne',
                                heading: 'Founder & CEO',
                                images: [...images.filter(img => img.collection === 'brandon-payne').map(image => image.src)],
                            },
                            {
                                title: 'Nia Ashay',
                                heading: 'CTO & Co-Founder',
                                images: [...images.filter(img => img.collection === 'nia-ashay').map(image => image.src)],
                            }
                        ],
                        minor: [
                            {
                                title: 'Our Members',
                                heading: 'Community',
                                images: [...images.splice(0, images.length / 2).map(image => image.src)],
                            },

                        ]
                    }

                }
            },
            contactSection: () => {
                return {
                    socials: meta.init().socials,
                    phone: meta.init().phone,
                    email: meta.init().email,
                    label: 'Contact Us',
                    heading: 'Get in touch with us',
                    cta: {
                        primary: {
                            name: 'Message Us',
                            url: 'facebook.com'
                        },

                        secondary: {
                            name: 'RSVP our Next Meeting',
                            url: ''
                        }

                    }

                }
            },
            summarySection: () => {
                return {
                    heading: 'What we do',
                    title: 'Artivism',
                    description: 'We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne',
                    sections: [
                        {
                            title: 'Awareness',
                            description: 'We are a Community of Conscious Builders for the Future',
                        },
                        {
                            title: 'Expression',
                            description: 'Sign up to be a part of our community',
                        },
                        {
                            title: 'Inclusivity',
                            description: 'Sign up to be a part of our community',
                        },
                        {
                            title: 'Development',
                            description: 'Sign up to be a part of our community',
                        },
                        {
                            title: 'Liberation',
                            description: 'Sign up to be a part of our community',
                        }

                    ]
                }
            },
            featuredSection: () => {
                return (
                    {
                        heading: 'Featured',
                        title: 'Events & Meetings',
                        description: 'Virutal & Real',
                        features: [
                            {
                                title: 'Interest Meeting | 09.06 @1800',
                                description: ''
                            },
                            {
                                title: 'Hippie Hideout | 09.06 @1800',
                            },
                            {
                                title: 'Hippie Hideout | 09.06 @1800',
                            }
                        ]

                    }
                )
            },
            statsSection: () => {
                return {
                    heading: 'Memberships Opportunities',
                    title: 'Let us grow further together',
                    description: 'We are a Community of Conscious Builders for the Future',
                    tables: [
                        {
                            title: 'Member',
                            pricing: {
                                rate: '10',
                                unit: 'month',
                            },
                            cta: {
                                primary: {
                                    name: 'Sign Up'
                                }
                            },
                            features: [
                                {
                                    name: 'Access to all events',

                                }
                            ]

                        },
                        {
                            title: 'Affiliate',
                            pricing: {
                                rate: '100',
                                unit: 'month',
                            },
                            features: [
                                {
                                    name: 'Access to all events',

                                }
                            ],
                            cta: {
                                primary: {
                                    name: 'Sign Up'
                                }
                            }
                        },
                        {
                            title: 'Partner',
                            pricing: {
                                rate: '200',
                                unit: 'month',
                            },
                            features: [
                                {
                                    name: 'Access to all events',

                                }
                            ],
                            cta: {
                                primary: {
                                    name: 'Sign Up'
                                }
                            }
                        }
                    ]
                }
            },

            featuredMedia: () => {

                return {
                    title: 'Our Beloved Partnerships',
                    features: [...partners]

                }
            }

        }
    },

    memberships: {

        query: {
            tableRow: {


                heading: 'Pricing',
                title: 'Membership Opportunites',
                tables: [
                    {
                        title: "Membership",
                        subTitle: 'For Artists & Creators',
                        price: '10.00',
                        cta: {
                            name: 'Sign Up',
                            url: '/forms'
                        },
                        features: [
                            {
                                name: '50% Discount All Events',
                                url: '/forms'
                            }, {
                                name: 'Online Events',
                                url: '/forms'
                            },
                            {
                                name: 'L10 Training',
                                url: '/events'
                            },
                            {
                                name: 'MDA (We The Media)',
                                url: '/events'
                            },
                            {
                                name: 'WTFi (We The Finance)',
                                url: '/events'
                            },
                        ]
                    },
                    {
                        title: "Sponsor",
                        subTitle: 'For Vendors',
                        price: '100.00',
                        features: [
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            }, {
                                name: 'Vendor Slot',
                                url: '/events'
                            },
                            {
                                name: 'Digital Marketing',
                                url: '/forms'
                            },
                            {
                                name: '50% Discount All Events',
                                url: '/forms'
                            }
                        ]
                    },
                    {
                        title: "Partner",
                        subTitle: 'For Businesses',
                        price: '200.00',
                        features: [
                            {
                                name: 'Everything inluded plus:',
                                url: '/forms'
                            }, {
                                name: 'Divergent U Membership',
                                url: '/forms'
                            },
                            {
                                name: 'Partner Page',
                                url: '/forms'
                            },


                        ]
                    },
                    {
                        title: "RSVP",
                        subTitle: "For Events",
                        price: 'Free',
                        features: [
                            {
                                name: 'Subscribe to our Events',
                                url: '/forms'
                            },
                        ]
                    }
                ]

            },

            logoArray: {

                logos: [
                    ...partners.map((partner) => ({
                        image: partner.image,
                        name: partner.name,
                        url: partner.url
                    }))
                ],
                title: 'Be A Part Of The MVMT',
                heading: 'Our Memeberships Programs',
                description: 'See how you can be a part of the WTFMVMT movement and help us build a better future for the next generation of creatives.'


            }
        }
        

    }


    return {
        id: 'wtfmvmt-pages-db',
        version: Date.now(),
        layout: layout,
        data: pageData[pageKey]
    }
}

export default pages