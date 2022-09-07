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
            sections: [
                {
                    title: 'Artivism',
                    description: 'We are a Community of Conscious Builders for the Future',
                },
                {
                    title: 'Sign Up',
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
                        name: "For Partners",
                        url: "forms/partners"
                    },
                    {
                        name: "For Vendors",
                        url: "forms/vendors"
                    },
                    {
                        name: "For Freelancers",
                        url: "forms/investors"
                    }
                ]
            }
        }


    },

    query: {



    }
}

export default homePage;