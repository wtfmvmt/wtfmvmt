import resolveDataPage from "@utils/resolveDataPage";
import images from "@db/images"
import header from "@configs/header"
import footer from "@configs/footer"
import meta from "@configs/meta"
import partners from "@db/partners"

import type { DataPage } from "@typings/DataPage";


const homePage: DataPage = {

    init: () => {
        try {
            resolveDataPage(homePage.query);
        }
        catch (error) {
            console.log(error);
        } finally {
            return {
                ...homePage.data, ...homePage.query,
            }
        }
    },

    data: {
        layout: {
            metaData: {
                pageTitle: "Home"
            },
            header: { ...header.init() },
            footer: { ...footer.init() },
        },

        dataSection: {
            heading: 'Check out our Media & Publication',
            title: 'Media & Projects',
            description: `Our publication & media showcases the experience & knowledge
                          of artists, designers, and activists who are dedicated to 
                          creating a better world through service or Artivism.`,
            data: [
                {
                    title: 'WTF is WTF?'
                },
                {

                },
                {
                    title: 'WTF is WTF?'
                },
                {

                },

            ]

        },
        imageMasonry: {

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

        },
        contactSection: {
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

        },
        summarySection: {
            heading: 'What we do',
            title: 'Artivism',
            description: 'We The Future is a brand that focuses on cultivating a creative pipeline through the use of music and the arts; it was conceived in 2015 through the vision of our founder, Brandon Payne',
            sections: [
                {
                    title: 'Attend',
                    description: 'We are a Community of Conscious Builders for the Future',
                },
                {
                    title: 'Follow Up',
                    description: 'Sign up to be a part of our community',
                },
                {
                    title: 'Follow Up',
                    description: 'Sign up to be a part of our community',
                }
            ]
        },
        featuredSection: {
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

        },
        statsSection: {
            heading: 'Memberships Opportunities',
            title: 'Let us grow further together',
            description: 'We are a Community of Conscious Builders for the Future',
            tables: [
                {
                    title: 'Member',
                    pricing: {
                        rate: '100',
                        unit: 'month',
                    },
                    cta: {
                        primary: {
                            name: 'Sign Up'
                        }
                    }

                },
                {
                    title: 'Affiliate',
                    pricing: {
                        rate: '250',
                        unit: 'month',
                    },
                    cta: {
                        primary: {
                            name: 'Sign Up'
                        }
                    }
                },
                {
                    title: 'Partner',
                    pricing: {
                        rate: '250',
                        unit: 'month',
                    },
                    cta: {
                        primary: {
                            name: 'Sign Up'
                        }
                    }
                }
            ]
        },

        featuredMedia: {
            title: 'Our Beloved Partnerships',
            features: [...partners]

        },

        hero: {
            title: meta.init().title,
            description: ['We are a Community of Conscious Builders for the Future'],
            mediaCarousels: [
                [...images.splice(0, images.length / 2).map(image => image.src)],
                [...images.splice(images.length / 2, images.length).map(image => image.src)]
            ],

            heading: "Join the MVMT",
            cta: {
                name: "Join the Movement",
                url: "/join",
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
                        name: 'Brandon J. Payne, Industries',
                        url: 'partners/brandon-j-payne-industries',
                        image: {
                            src: '/assets/images/brandon-payne-logo.png',
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
                title: 'Join the MVMT',
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
                ]
            }
        }
    },

    query: {
    }
}



export default homePage;