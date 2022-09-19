import resolveDataPage from "@utils/resolveDataPage";
import images from "@db/images"
import header from "@configs/header"
import footer from "@configs/footer"
import meta from "@configs/meta"
import partners from "@db/partners"
import { Tags } from "@models/typings/Tags"

import MediaDB from "@db/media"

import type { DataPage } from "@typings/DataPage";


const MembershipsDB: DataPage = {


    init: async () => {


        try {
            await Object.keys(MembershipsDB.query).map(key => {
                MembershipsDB.query[key] = MembershipsDB.query[key]()
            })
            return {
                ...MembershipsDB.data, ...MembershipsDB.query,
            }

        }
        catch (error) {
            console.log(error);
        } finally {
            return {
                ...MembershipsDB.data, ...MembershipsDB.query,
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



    },

    query: {

        tableRow: () => {

            return {
                heading: 'Join the MVMT',
                title: 'Our Memberships Programs',
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
                                url: '/events'
                            }, {
                                name: 'WTFMVMT Programs Access',
                                url: '/events'
                            },
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            },
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            }
                        ]
                    },
                    {
                        title: "Afilliate",
                        subTitle: 'For Vendors',
                        price: '100.00',
                        features: [
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            }, {
                                name: '50% Discount All Events',
                                url: '/events'
                            },
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            },
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            }
                        ]
                    },
                    {
                        title: "Partner",
                        subTitle: 'For Businesses',
                        price: '200.00',
                        features: [
                            {
                                name: '50% Discount All Events',
                                url: '/events'
                            }, {
                                name: 'Partner Call To Action Page on WTFMVMT',
                                url: '/events'
                            },
                            {
                                name: 'Mentorship Program',
                                url: '/events'
                            },

                        ]
                    },
                    {
                        title: "RSVP",
                        price: 'Free',
                        features: [
                            {
                                name: 'Subscribe to our Events',
                                url: '/events'
                            },
                        ]
                    }
                ]
            }
        },

        logoArray: () => {


            return {
                logos: [
                    ...partners.map((partner) => ({
                        image: partner.image,
                        name: partner.name,
                        url: partner.url
                    }))
                ],
                title: 'OUr Memeberships Programs',
                heading: 'OUr Memeberships Programs',
                description: 'OUr Memeberships Programs',
            }
        }
    }
}



export default MembershipsDB;