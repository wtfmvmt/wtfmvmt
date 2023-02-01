import events from "@db/events"
import faqs from "@db/faqs"
import forms from "@db/forms"
import links from "@db/links"
import media from "@db/media"
import memberships from "@db/memberships"
import meta from "@db/meta"
import partners from "@db/partners"
import socialMedia from "@db/social_media"
import team from "@db/team"
import type { ColumnListProps } from "@typings/ColumnList"
import type { ContactProps } from "@typings/ContactProps"
import type { FeaturedProps } from "@typings/Featured"
import type { LogoArrayProps } from "@typings/LogoArray"
import type { PageQueryProps } from "@typings/Page"
import type { RowListProps } from "@typings/RowList"
import type { StatsRowProps } from "@typings/StatsRow"
import type { SummaryProps } from "@typings/Summary"
import { array } from "@utils/index"


export default function pages({ store, key }: PageQueryProps) {

    const { shuffle } = array()

    const { getFAQs } = faqs(store)
    const { getTeam } = team(store)
    const { getPhotos, getMedia } = media(store)
    const { getMemberships } = memberships(store)
    const { getLinks } = links(store)
    const { getSocialMedia } = socialMedia(store)
    const { getPartners } = partners(store)
    const { getEvents } = events(store)
    const { getForms } = forms(store)
    const { getBanner, getMessages, getArtivismHeading, getPillars, getEventsHeading, getCopyright, getEmailAddress, getCallToAction, getTeamHeading, getFavicon, getTitle, getImpressum, getMembershipsHeading, getFAQsHeading, getPartnersHeading } = meta(store)

    const _data = {
        home: {
            metaData: {
                pageTitle: 'Home',
                title: getTitle()?.values[0]
            },
            data: {
                hero: {
                    title: getTitle()?.values[0] ?? null,
                    images: getMedia()
                        .map((image) => image?.media[0]?.url)
                        .filter((image) => image != null),
                    subTitle: getImpressum()?.values[0] ?? null,
                    features: {
                        heading: "Latest Activity",
                        featured: [
                            {
                                name: "Featured"
                            },
                            {
                                name: "Featured"
                            },
                            {
                                name: "Featured"
                            },
                            {
                                name: "Featured"
                            },
                            {
                                name: "Featured"
                            }
                            ,
                            {
                                name: "Featured"
                            }
                            ,
                            {
                                name: "Featured"
                            }
                        ]
                    },
                    socialLinks: shuffle(getSocialMedia().map((social) => ({ url: social?.url })).splice(0, getSocialMedia().length - 3)),
                    actionLinks: {
                        title: "We The Future",
                        links: getForms().map((form) => ({
                            icon: form?.icon,
                            name: form?.name,
                            url: form?.url
                        }))
                    },
                    eventsWidget: {
                        title: "Join The MVMT!"
                    },
                    cta: {
                        name: getCallToAction().values[0],
                    }
                },
                logoArray: <LogoArrayProps>{
                    title: getPartnersHeading()?.name,
                    description: getPartnersHeading()?.description,
                    heading: getPartnersHeading()?.values[0],
                    logos: getPartners().map((partner) => ({
                        name: partner?.name ?? null,
                        description: partner?.description ?? null,
                        image: {
                            src: partner?.media[0]?.url
                        }

                    }))
                },

                tableRow: {
                    title: getMembershipsHeading()?.name,
                    heading: getMembershipsHeading()?.values[0],
                    tables: getMemberships().map((membership) => ({
                        title: membership?.name,
                        heading: membership?.description ?? null,
                        value: membership?.price,
                        cta: {
                            name: membership?.actions[0] ?? null,
                            url: membership?.url ?? null
                        },
                        features: membership?.values?.map((feature) => ({
                            name: feature,
                            ...feature
                        })) ?? null
                    }))
                },
                featured: <FeaturedProps>{
                    title: getEventsHeading()?.name,
                    description: getEventsHeading()?.description,
                    heading: getEventsHeading()?.values[0],
                    carousel: shuffle(getPhotos().map((m) => m?.media[0]?.url ?? null)).splice(0, 20),
                    features: getEvents().map((event) => ({
                        title: event?.name,
                        cover: event?.media[0]?.url ?? null
                    }))
                },
                statsRow: <StatsRowProps>{
                    stats: [
                        {
                            title: "Team",
                            value: getTeam().length
                        },
                        {
                            title: "Events",
                            value: getEvents().length
                        },
                        {
                            title: "Revenue",
                            value: getTeam().length
                        },
                        {
                            title: "Partners",
                            value: getPartners().length
                        }
                    ]
                },
                summary: <SummaryProps>{
                    title: getArtivismHeading()?.name,
                    description: getArtivismHeading()?.description,
                    heading: getArtivismHeading()?.values[0] ?? null,
                    sections: getPillars().map((section, index) => ({
                        title: section?.name ?? null,
                        description: section?.description ?? null,
                    })),
                    video: {
                        url: getArtivismHeading()?.youtube ?? null
                    }

                },
                imageMasonry: {
                    title: getTeamHeading()?.name ?? null,
                    description: getTeamHeading()?.description ?? null,
                    heading: getTeamHeading()?.values[0] ?? null,
                    masonry: getTeam().map((team) => ({
                        image: {
                            src: team?.media[0]?.url ?? null,
                        },
                        url: team?.url ?? null,
                        heading: team?.types[0] ?? null,
                        title: team?.name ?? null,
                    }))

                },
                rowList: <RowListProps>{
                    title: "Community Stories",
                    list: new Array(20).map((i) => ({ description: "Love" }))
                },
                columnList: <ColumnListProps>{
                    title: getFAQsHeading()?.name,
                    list: getFAQs().map((question) => ({
                        name: question?.name,
                        description: question?.description,
                        icon: question?.icon
                    })),
                    cta: {
                        name: 'Learn More',
                        url: '/faqs'
                    }
                },


            },

        },

        vision: {
            metaData: {
                pageTitle: "Vision"
            },
            data: {


            }
        },

        team: {
            metaData: {
                pageTitle: "Team"
            },
            data: {

                imageMasonry: {
                    title: getTeamHeading()?.name ?? null,
                    description: getTeamHeading()?.description ?? null,
                    heading: getTeamHeading()?.values[0] ?? null,
                    masonry: getTeam().map((team) => ({
                        image: {
                            src: team?.media[0]?.url ?? null,
                        },
                        url: team?.url ?? null,
                        heading: team?.types[0] ?? null,
                        title: team?.name ?? null,
                    }))

                },
                contact: <ContactProps>{
                    socials: getSocialMedia().map((social) => ({
                        url: social?.url ?? null
                    })),
                    email: getEmailAddress().email,
                }

            }
        },

        memberships: {
            metaData: {
                pageTitle: "Memberships",
            },
            data: {
                tableRow: {
                    title: getMembershipsHeading()?.name,
                    heading: getMembershipsHeading()?.values[0],
                    tables: getMemberships().map((membership) => ({
                        title: membership?.name,
                        heading: membership?.description ?? null,

                        value: membership?.price,
                        cta: {
                            name: membership?.actions[0] ?? null,
                            url: membership?.url ?? null
                        },
                        features: membership?.values?.map((feature) => ({
                            name: feature
                        })) ?? null
                    }))
                },
            }
        },

        events: {
            metaData: {
                pageTitle: "Events",
            },
            data: {
                contact: <ContactProps>{
                    socials: getSocialMedia().map((social) => ({
                        url: social?.url ?? null
                    })),
                    email: getEmailAddress().email,
                },
                featured: <FeaturedProps>{
                    title: getEventsHeading()?.name,
                    description: getEventsHeading()?.description,
                    heading: getEventsHeading()?.values[0],
                    carousel: shuffle(getPhotos().map((m) => m?.media[0]?.url ?? null)),
                    features: getEvents().map((event) => ({ title: event?.name }))
                },
            }
        },

        rsvp: {
            metaData: {
                pageTitle: "RSVP",
            },


            data: {

            }
        },

        legal: {
            metaData: {
                pageTitle: "Legal"
            }
        },

        store: {
            metaData: {
                pageTitle: "Store"
            }
        },

        partners: {
            metaData: {
                pageTitle: "Partners",
                description: "WTFMVMT Partnerships"
            },

            data: {

            }
        },

        stories: {
            metaData: {
                pageTitle: "Stories",
            }
        },

        projects: {
            metaData: {
                pageTitle: "Projects",
            }
        },

        blog: {
            metaData: {
                pageTitle: "Blog",
            },

            data: {

            }
        },

        community: {
            metaData: {
                pageTitle: "Community",
            },
            data: {}
        },

        media: {
            metaData: {
                pageTitle: "Media",
            },
            data: {

            }
        },

        artivism: {
            metaData: {
                pageTitle: "Artivism",
            },
            data: {
                summary: <SummaryProps>{
                    title: getArtivismHeading()?.name,
                    description: getArtivismHeading()?.description,
                    heading: getArtivismHeading()?.values[0] ?? null,
                    sections: getPillars().map((section, index) => ({
                        title: section?.name ?? null,
                        description: section?.description ?? null,
                    })),
                    video: {
                        url: getArtivismHeading()?.youtube ?? null
                    }

                },
            }
        },

        faqs: {
            metaData: {
                pageTitle: "FAQs"
            },
            data: {
                columnList: <ColumnListProps>{
                    title: getFAQsHeading()?.name,
                    list: getFAQs().map((question) => ({
                        name: question?.name,
                        description: question?.description,
                        icon: question?.icon
                    }))
                },
            }

        },

        future: {
            metaData: {
                pageTitle: "Future"
            }
        },

        about: {
            metaData: {
                pageTitle: "About",
            }
        },

        forms: {
            metaData: {
                pageTitle: "Forms"
            },

            data: {
                contact: <ContactProps>{
                    socials: getSocialMedia().map((social) => ({
                        url: social?.url ?? null
                    })),
                    email: getEmailAddress().email,
                }
            }
        }
    }

    const _page = {
        version: Date.now(),
        layout: {
            header: {
                breadcrumbs: getMessages().values.map((v) => ({ message: v })),
                banner: {
                    messages: getBanner().values
                },
                favicon: {
                    image: {
                        src: getFavicon()?.files[0]?.url ?? null
                    },
                    url: getFavicon()?.url ?? null
                }
            },
            footer: {
                socials: getSocialMedia(),
                favicon: {
                    image: {
                        src: getFavicon()?.files[0]?.url ?? null,
                        alt: getFavicon()?.files[0]?.name ?? null,
                    },
                    url: getFavicon().url ?? null,
                },
                header: {
                    title: getTitle().values[0],
                    description: getImpressum().values[0],
                    links: [
                        {
                            title: "Pages",
                            links: getLinks()
                        },
                        {
                            title: "Pages",
                            links: getLinks()
                        },
                        {
                            title: "Pages",
                            links: getLinks()
                        },
                        {
                            title: "Pages",
                            links: getLinks()
                        }
                    ]
                },
                links: [],
                cta: {

                },
                legal: {
                    copyright: getCopyright().values,
                    impressum: getImpressum().values[0]
                }

            },
            menu: {
                links: getLinks().map((link) => ({
                    icon: link?.icon,
                    name: link?.name,
                    url: link?.url,
                })),
                cta: [
                    {
                        name: "Support Us"
                    }
                ],

                favicon: {
                    image: {
                        src: getFavicon().files[0]?.url,
                    },
                    url: getFavicon()?.url
                }
            },
            contact: {
                socials: getSocialMedia().map((social) => ({
                    url: social?.url ?? null
                })),
                email: getEmailAddress().email,
            }
        },
        metaData: _data[key]?.metaData,
        data: _data[key]?.data ?? _data["home"]?.data,
        pages: _data[key]?.pages,
    }

    return _page
}



