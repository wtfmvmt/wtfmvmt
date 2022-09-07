import { ImageMasonry } from '@components/ImageMasonry/ImageMasonry';
import type { DataPage } from "@typings/DataPage";
import resolveDataPage from "@controllers/utils/resolveDataPage";
import header from "@configs/header"
import footer from "@configs/footer"
import meta from "@configs/meta"
import images from "@db/images"


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
        imageMasonry: {

            heading: "Our Founders and Team",
            title: 'Who we are',
            cta: {
                primary: {
                    name: ''
                },
                secondary: {
                }
            },
            description: 'Our core team is made up of a group of passionate individuals who are dedicated to making a difference in the world. We are a diverse group of people from different backgrounds, cultures, and experiences. We are united by our common goal of making a positive impact on the world.',
            masonry: {
                major: [
                    {
                        title: 'Brandon J. Payne',
                        heading: 'Founder & CEO',
                        images: ["brandon.jpg"],
                    },
                    {
                        title: 'Nia Ashay',
                        heading: 'Founder & CEO',
                        images: ["brandon.jpg"],
                    }
                ],
                minor: [
                    {
                        title: 'Arianna Gonzalez',
                    }
                ]
            }

        },
        contactSection: {
            socials: meta.socials,
            phone: meta.phone,
            email: meta.email,
            label: 'Contact Us',
            heading: 'Get in touch with us',
            cta: {
                primary: {
                    name: 'Message Us',
                    url: '/'
                },
                secondary: {
                    name: 'RSVP our Next Meeting',
                    url: '/rsvp'
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

        hero: {

            title: meta.title,
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
            socialLinks: meta.socials,
            features: {
                heading: 'Our Partners',
                featured: [
                    {
                        url: '/',
                        image: {
                            src: '/assets/images/serenitys-grace-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: 'https://mountaintopentertainmentgroup.com/',
                        image: {
                            src: '/assets/images/wtfmedia-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: '/',
                        image: {
                            src: '/assets/images/brandon-payne-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: 'https://mountaintopentertainmentgroup.com/',
                        image: {
                            src: '/assets/images/mountaintop-entertainment-group-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: '/',
                        image: {
                            src: '/assets/images/desirable-solutions-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: 'https://mountaintopentertainmentgroup.com/',
                        image: {
                            src: '/assets/images/keith-andes-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: 'https://mountaintopentertainmentgroup.com/',
                        image: {
                            src: '/assets/images/diahnn-perry-logo.png',
                            alt: ''
                        }
                    },
                    {
                        url: 'https://mountaintopentertainmentgroup.com/',
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
                        url: "forms/artists"
                    },
                    {
                        name: "For Newcomers",
                        url: "forms/newcomers"
                    },
                    {
                        name: "For Businesses",
                        url: "forms/businesses"
                    },
                    {
                        name: "For Vendors",
                        url: "forms/vendors"
                    },

                ]
            }
        }


    },

    query: {



    }
}

export default homePage;