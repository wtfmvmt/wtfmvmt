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
            resolveDataPage(MembershipsDB.query);
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
                        title: "Afilliate",
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
                        title: "RSVP",
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
                    }
                ]
            }
        },

        logoArray: () => {
            return {
                logos: [],
                title: 'OUr Memeberships Programs',
                heading: 'OUr Memeberships Programs',
                description: 'OUr Memeberships Programs',
            }
        }
    }
}



export default MembershipsDB;