import { $Hero } from "@components/Hero";
import { $FeaturedSection } from "@views/components/FeaturedSection";
import { $SummarySection } from "@views/components/SummarySection";
import { $StatsSection } from "@components/StatsSection"
import { $ImageMasonry } from "@components/ImageMasonry"
import { $ContactSection } from "@components/ContactSection"

import meta from "@configs/meta";
import layout from "@configs/layout";




const pages = {
    id: 'wtfmvmt-pages',
    version: Date.now(),
    layout: layout,
    dependencies: [],
    pages: {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: [
                {
                    component: $Hero,
                    props: async () => {

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

                },

                {
                    component: $FeaturedSection,
                    props: {}
                },
                {
                    component: $SummarySection,
                    props: {}
                },
                {
                    component: $StatsSection,
                    props: {}
                },
                {
                    component: $ContactSection,
                    props: {}
                },
                {
                    component: $ImageMasonry,
                    props: {
                        cta: {
                            primary: {
                                name: "Join the Movement",
                                url: "/memberships",
                            },
                            secondary: {
                                name: "Learn More",
                                url: "/about",
                            }
                        }
                    }
                }
            ]
        }
    }
}


export default pages