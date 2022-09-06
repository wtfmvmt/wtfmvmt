import type { DataPage } from "@typings/DataPage";
import resolveDataPage from "@controllers/utils/resolveDataPage";
import header from "@configs/header"
import footer from "@configs/footer"
import meta from "@configs/meta"



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

        hero: {

            title: meta.title,
            description: ['We are a Community of Conscious Builders for the Future'],

            mediaCarousels: [
                [
                    "https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/277566995_1426748454414950_1657349356422612304_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6L5P1IbKlsQAX-GFkuW&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT9hr40EE1p6DuwfNM8t0f_eWujgf5wx-lGLvkYow-Rg6Q&oe=63111278",
                    "https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/277671893_1426749901081472_5563598177286957791_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=RdL3PKiQnO4AX8Ir-ki&_nc_ht=scontent.ftpa1-2.fna&oh=00_AT9dL-idE88nbOSurT4TE0nKXD5q9XFBswDUkG4EDcv7yA&oe=6311AEE6"
                ],
                [
                    "https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/277566995_1426748454414950_1657349356422612304_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6L5P1IbKlsQAX-GFkuW&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT9hr40EE1p6DuwfNM8t0f_eWujgf5wx-lGLvkYow-Rg6Q&oe=63111278",
                    "https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/277671893_1426749901081472_5563598177286957791_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=RdL3PKiQnO4AX8Ir-ki&_nc_ht=scontent.ftpa1-2.fna&oh=00_AT9dL-idE88nbOSurT4TE0nKXD5q9XFBswDUkG4EDcv7yA&oe=6311AEE6"
                ]
            ],

            heading: "Join the MVMT",
            cta: {
                name: "Join the Movement",
                url: "/join",
                icon: "SchoolIcon"
            },
            socialLinks: meta.socials,
            actionLinks: {
                title: 'Join the MVMT',
                links: [
                    {
                        name: "For Artists",
                        url: "forms/artists"
                    },
                    {
                        name: "For Newcomers",
                        url: "forms/newbies"
                    },
                    {
                        name: "For Creators",
                        url: "forms/investors"
                    },
                    {
                        name: "For Vendors",
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