import utils from "@utils/index"

const FacadeService = () => {

    const { files, url, email, phone, formula, rich_text, title, multi_select, number, status, select, isDatabase, getProperties } = utils().notion

    const serviceObject = {
        version: Date.now(),
        types: {

            forms: {
                shape: (data) => {},
                predicate: (data) => {}
            },

            media: {
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

                    const { Facebook, Name, Covers, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        types: multi_select(Types),
                        covers: files(Covers),
                        status: status(Status),
                        facebook: url(Facebook),
                    }


                },

                predicate: (data: any) => {

                    const { name } = serviceObject.types.team

                    return isDatabase(data, name)

                }
            },
            meta: {
                name: "📐Meta",
                shape: (data: any) => {

                    const { URL, Title, Name, Covers, Types, Values, Description, Status, Phone, Email } = data.properties

                    return {
                        url: url(URL),
                        title: select(Title),
                        name: title(Name),
                        description: rich_text(Description),
                        status: status(Status),
                        covers: files(Covers),
                        phone: phone(Phone),
                        email: email(Email),
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

                    const { URL, Name, Types } = data.properties

                    return {
                        url: url(URL),
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