import { Client } from "@notionhq/client"

const NotionService = {

    utils: {
        isPublic: (data) => {
            const { status } = NotionService.utils
            return status(data) === 'public'
        },
        isPrivate: () => { },
        getProperties: (data) => {
            return data?.properties ?? {}
        },
        getDatabase: (data, key) => {
            return data?.properties?.Database?.select?.name === key ?? null
        },
        files: (data) => {
            return data?.files ?? []
        },
        select: (data) => {
            return data?.select ?? null
        },
        status: (data) => {
            return data?.status ?? null
        },
        multiSelect: (data) => {
            return data?.multi_select ?? null
        }

    },

    enums: {
        TYPES: {
            COPYRIGHT: "📜Copyright",
            PHOTO: "📸Photo",
            VIDEO: "🎥Video",
            BANNER: "🪧Banner",
            IMPRESSUM: "✒️Impressum"
        },
        DATABASES: {
            SITE_PAGES: "📎Site Pages",
            MEMBERSHIPS: "👥Memberships",
            ARTIVISM: "🎨Artivism",
            BLOG: "📰Blog",
            COMMUNITY: "👥Community",
            EVENTS: "🗓️Events",
            MEDIA: "📷Media",
            MUSIC: "🎵Music",
            NEWS: "📰News",
            PROJECTS: "📚Projects",
            META: "📐Meta",
            SERVICES: "🛠Services",
            FORMS: "📜Forms",
            STORE: "🛒Store",
            VIDEOS: "📺Videos",
            SOCIAL_MEDIA: "📱Social Media",
            PARTNERS: "💖Partners",
            SPONSORS: "👥Sponsors",
            DONORS: "👥Donors",
            VOLUNTEERS: "👥Volunteers",
            STAFF: "👥Staff",
            TEAM: "Team",
            BOARD: "👥Board",
            ADVISORS: "👥Advisors",
            SUPPORTERS: "👥Supporters",

        },
        STATUSES: {
            PUBLIC: "🌐Public",
            PRIVATE: "🔒Private",

        }
    },


    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    db: {

        TEAM: {
            shape: (data) => {

                const shapeObject = {
                    name: data?.properties?.Name?.title?.[0]?.plain_text ?? null,
                    url: data?.properties?.URL?.url ?? null,
                    icon: data?.icon.external.url ?? null,
                    date: data?.properties?.Date?.date?.start ?? null,
                }

                return { ...shapeObject } ?? null

            },

            predicate: (data) => {

                const { enums: { DATABASES: { TEAM } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, TEAM)
            },
        },

        SITE_PAGES: {
            shape: (data) => {

                const shapeObject = {
                    name: data?.properties?.Name?.title?.[0]?.plain_text ?? null,
                    url: data?.properties?.URL?.url ?? null,
                    icon: data?.icon.external.url ?? null,
                    date: data?.properties?.Date?.date?.start ?? null,
                }

                return { ...shapeObject } ?? null

            },

            predicate: (data) => {

                const { enums: { DATABASES: { SITE_PAGES } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, SITE_PAGES)
            },
        },
        MEMBERSHIPS: {
            shape: (data) => {
                const shapeObject = {
                    title: data?.properties?.Name?.title[0]?.plain_text,
                    cost: data?.properties?.Cost?.number,
                    features: data?.properties?.Features?.multi_select.map((feature) => feature.name),
                }

                return { ...shapeObject } ?? null
            },
            predicate: (data) => {
                const { enums: { DATABASES: { MEMBERSHIPS } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, MEMBERSHIPS)
            },
        },

        FORMS: {
            shape: (data) => {

                const shapeObject = {
                    title: data?.properties?.Name?.title[0]?.plain_text,
                    url: data?.properties?.URL?.url ?? null,
                }


                return { ...shapeObject }
            },

            predicate: (data) => {
                const { enums: { DATABASES: { FORMS } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, FORMS)
            }
        },

        PARTNERS: {
            shape: (data) => {
                const shapeObject = {
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    cover: data?.properties?.Media?.files[0]?.file.url,
                    url: data?.properties?.URL?.url,
                }

                return { ...shapeObject } ?? null
            },

            predicate: (data) => {
                const { enums: { DATABASES: { PARTNERS } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, PARTNERS)
            },
        },
        MEDIA: {
            shape: (data: any) => {
                return {
                    alt: data?.properties?.Name?.title[0].plain_text,
                    src: data?.properties?.Media.files.map((file) => file?.file?.url),
                }
            },
            predicate: (data: any) => {
                const { enums: { DATABASES: { MEDIA } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, MEDIA)
            }
        },

        SOCIAL_MEDIA: {
            shape: (data: any) => {

                const shapeObject = {
                    name: data?.properties?.Name?.title[0].plain_text,
                    url: data?.properties?.URL?.url ?? "#",
                    icon: data?.properties?.Icon?.select?.name
                }
                return { ...shapeObject } ?? null
            },
            predicate: (data: any) => {
                const { enums: { DATABASES: { SOCIAL_MEDIA } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, SOCIAL_MEDIA)
            }
        },

        EVENTS: {
            shape: (data: any) => {
                type EventProps = {
                    name?: string,
                }
                const shapeObject = {
                    title: data?.properties?.Name?.title[0].plain_text,
                    cover: data?.properties?.Media?.files[0]?.file.url ?? "",
                }
                return { ...shapeObject } ?? null
            },
            predicate: (data: any) => {
                const { enums: { DATABASES: { EVENTS } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, EVENTS)
            }
        },

        META: {
            shape: (data: any) => {
                const { select, status, multiSelect, getProperties } = NotionService.utils
                const { Database, Status, Values, Types, Departments } = getProperties(data)

                return {
                    database: select(Database)?.name,
                    status: status(Status)?.name,
                    values: multiSelect(Values).map((value) => value.name),
                    types: multiSelect(Types).map((type) => type.name),
                    departments: multiSelect(Departments).map((department) => department.name),

                }
            },
            predicate: (data: any) => {
                const { enums: { DATABASES: { META } },
                    utils: { getDatabase } } = NotionService
                return getDatabase(data, META)
            }
        },

    },

    loadCentralDogma: async () => {
        //miracle query for @v.x{ < 3 }.y.z
        const { api, secured } = NotionService
        const centralDogma = await api.databases.query({
            database_id: secured.central_dogma
        })

        return centralDogma
    },

}


export default NotionService