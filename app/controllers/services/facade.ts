import utils from "@utils/index"

const FacadeService = () => {

    const { files, url, email, phone, formula, icon, rich_text, title, multi_select, number, status, select, isDatabase, getProperties } = utils().notion

    const serviceObject = {
        version: Date.now(),
        types: {
            partners: {
                name: "💖Partners",
                shape: (data) => {
                    const { Facebook, Media, Name, Covers, URL, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        media: files(Media),
                        covers: files(Covers),
                        status: status(Status),
                        url: url(URL),
                        facebook: url(Facebook),
                        types: multi_select(Types)
                    }
                },
                predicate: (data) => {
                    return isDatabase(serviceObject?.types?.partners?.name, data)
                }
            },

            forms: {
                name: "📜Forms",
                shape: (data) => {
                    const { Facebook, Name, Covers, URL, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        covers: files(Covers),
                        status: status(Status),
                        url: url(URL),
                        facebook: url(Facebook),
                        types: multi_select(Types)
                    }
                },
                predicate: (data) => {
                    return isDatabase(serviceObject?.types?.forms?.name, data)
                }
            },
            events: {
                shape: (data) => {
                    const { Facebook, Name, Covers, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        covers: files(Covers),
                        status: status(Status),
                        facebook: url(Facebook),
                        types: multi_select(Types)
                    }
                },
                predicate: (data) => {

                }
            },


            media: {
                name: "📷Media",
                shape: (data) => {

                    const { Facebook, Name, Media, Covers, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        media: files(Media),
                        covers: files(Covers),
                        status: status(Status),
                        facebook: url(Facebook),
                        types: multi_select(Types)
                    }
                },
                predicate: (data) => {
                    const { name } = serviceObject.types.media
                    return isDatabase(name, data)
                }
            },
            memberships: {
                shape: (data) => {
                    const { Facebook, Name, Covers, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        covers: files(Covers),
                        status: status(Status),
                        facebook: url(Facebook),
                        types: multi_select(Types)
                    }
                },
                predicate: (data) => { }
            },
            team: {
                name: "🅰️Team",
                shape: (data: any) => {

                    const { Facebook, Name, Media, Values, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        values: multi_select(Values),
                        types: multi_select(Types),
                        media: files(Media),
                        status: status(Status),
                        facebook: url(Facebook),
                    }
                },

                predicate: (data: any) => {

                    const { name } = serviceObject.types.team

                    return isDatabase(name, data)

                }
            },
            meta: {
                name: "📐Meta",
                shape: (data: any) => {

                    const { URL, Title, Name, Covers, Types, Files, Values, Description, Status, Phone, Email } = data.properties

                    return {
                        url: url(URL),
                        title: select(Title),
                        name: title(Name),
                        description: rich_text(Description),
                        status: status(Status),
                        covers: files(Covers),
                        phone: phone(Phone),
                        email: email(Email),
                        files: files(Files),
                        types: multi_select(Types),
                        values: multi_select(Values),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.meta
                    return isDatabase(name, data) ?? null
                }
            },
            faqs: {
                name: "❓FAQ",
                shape: (data: any) => {

                    const { URL, Name, Description, Status, Types } = data.properties

                    return {
                        question: title(Name),
                        answer: rich_text(Description),
                        status: status(Status),
                        url: url(URL),
                        types: multi_select(Types),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.faqs
                    return isDatabase(name, data) ?? null
                }
            },
            links: {
                name: "📎Links",
                shape: (data: any) => {

                    const { properties: { URL, Name, Types }, icon: Icon } = data

                    return {
                        url: url(URL),
                        icon: icon(Icon),
                        name: title(Name),
                        types: multi_select(Types),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.links
                    return isDatabase(name, data) ?? null
                }

            },
            social_media: {
                name: "📱Social Media",
                shape: (data: any) => {

                    const { URL, Title, Types, Status } = data.properties

                    return {
                        url: url(URL),
                        title: rich_text(Title),
                        types: multi_select(Types),
                        status: status(Status),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.social_media
                    return isDatabase(name, data) ?? null
                }

            },
        },

    }

    return { ...serviceObject }
}

export default FacadeService