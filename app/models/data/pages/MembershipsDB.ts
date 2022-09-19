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
                                url: '/events'
                            }, {
                                name: 'Online Events',
                                url: '/events'
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
                                name: 'Everything inluded plus:',
                                url: '/events'
                            }, {
                                name: 'Divergent U Membership',
                                url: '/events'
                            },
                            {
                                name: 'Partner Page',
                                url: '/events'
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
                title: 'Be A Part Of The MVMT',
                heading: 'Our Memeberships Programs',
                description: 'See how you can be a part of the WTFMVMT movement and help us build a better future for the next generation of creatives.'
            }

        }
    }
}


export default MembershipsDB;