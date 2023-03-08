
import type { NotionFileProps } from "@typings/Notion"
import type { QueryDatabaseProps, CreateDatabaseProps } from "@typings/Data"

export const notion = () => {

    const utilsObject = {

        isDatabase: (key, data) => {
            return data?.properties?.Database?.select?.name === key
        },
        getProperties: (data) => {
            return { ...data?.properties } ?? null
        },
        last_edited: (data) => {
            return data?.last_edited_time ?? "[Network]: LAST_EDITED_NOT_FOUND"
        },
        status: (data) => {
            if (Array.isArray(data?.status)) {
                return data?.status?.map((status) => (status.name)) ?? null
            } else {
                return null
            }
        },
        multi_select: (data) => {
            return data?.multi_select?.map((item) => item?.name ? item?.name : null) ?? ["[Network]: MULTI_SELECT_NOT_FOUND"]
        },
        icon: (data) => {
            return data?.external?.url ?? "[Network]: ICON_NOT_FOUND]"
        },
        email: (data) => {
            return data?.email ?? "[Network]: EMAIL_NOT_FOUND]"
        },

        phone: (data) => {
            return data?.phone_number ?? "[Network]: PHONE_NOT_FOUND]"
        },
        select: (data) => {
            return data?.select?.name ?? "[Network]: SELECT_NOT_FOUND"
        },
        date: (data) => {
            return data?.date?.start ?? "[Network]: DATE_NOT_FOUND]"
        },
        number: (data) => {
            return data?.number ?? "[Network]: NUMBER_NOT_FOUND]"
        },
        formula: (data) => {
            return data?.formula?.number ?? "[Network]: FORMULA_NOT_FOUND]"
        },
        rich_text: (data) => {
            if (Array.isArray(data?.rich_text)) {
                return data?.rich_text.map((text) => (text.plain_text)) ?? "NOT_FOUND"
            } else {
                return "NOT_FOUND"
            }
        },
        title: (data) => {
            return data?.title[0]?.plain_text ?? "[Network]: TITLE_NOT_FOUND"
        },
        files: (data): NotionFileProps[] => {
            return data?.files?.map(file => ({
                url: file?.file?.url ?? file?.name ?? "FA",
                name: file?.file?.name ?? "[Network]: NAME_NOT_FOUND",
            }))
        },
        url: (data) => {
            return data?.url ?? "[Network]: URL_NOT_FOUND"
        }
    }

    return { ...utilsObject }
}


export const array = () => {
    const _utils = {
        shuffle: (arr) => {
            let currentIndex = arr.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [arr[currentIndex], arr[randomIndex]] = [
                    arr[randomIndex], arr[currentIndex]];
            }
            return arr;
        }
    }

    return _utils
}

export const facade = () => {

    const _utils = {
        queryDatabase: ({ keys, db, batch = false }: QueryDatabaseProps) => {
            if (batch) {
                return db.
                    filter((element) => keys.every((key) => {
                        return element?.types?.includes(key)
                    })) ?? null
            }
            else {
                return db.
                    find((element) => keys.every((key) => {
                        return element?.types?.includes(key)
                    })) ?? null
            }
        },

        extractCentralDogmaKeys: ({ data }) => {

            type CentralDogmaProps = {
                Facebook?: string;
                Types?: any[];

            }
            const { files, url, email, phone, formula, icon, rich_text } = notion()

            const { title, multi_select, number, status, select, isDatabase, getProperties } = notion()

            const { properties: { Facebook, Media, Discount, ID, Email, Phone, Price, Value, Name, URL, Types, Status, Description } } = data ?? null

            return {
                name: title(Name),
                uuid: formula(ID),
                id: title(Name).replace(/\s+/g, '-').toLowerCase(),
                media: files(Media),
                discount: number(Discount),
                value: number(Value),
                email: email(Email),
                description: rich_text(Description),
                price: formula(Price),
                status: status(Status),
                url: url(URL),
                facebook: url(Facebook),
                types: multi_select(Types)
            }

        },

        createDatabase: ({ id, data, shape, predicate }: CreateDatabaseProps) => {

            return {
                id,
                data: data.
                    filter((element) => {
                        return predicate(element)
                    }).
                    map((element) => {
                        return shape(element)
                    })
            }
        }
    }
    return _utils
}


export const pages = () => {

    const utilsObject = {

        getPageProps: (page) => {
            return page?.data ?? null
        },
        generatePage: ({ store, id }) => {
            return {
                id: crypto.randomUUID(),
                version: Date.now(),
                layout: {
                    ...store?.layout,
                    ...store[id]?.metaData
                },
                data: store[id]?.data,
            }
        }


    }
    return utilsObject
}

