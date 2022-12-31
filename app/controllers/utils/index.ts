
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
        files: (data) => {
            return data?.files?.map(file => ({
                url: file?.file?.url ?? "[Network]: URL_NOT_FOUND",
                name: file?.file?.name ?? "[Network]: NAME_NOT_FOUND",
            })) as NotionFileProps
        },
        url: (data) => {
            return data?.url ?? "[Network]: URL_NOT_FOUND"
        }
    }

    return { ...utilsObject }
}


export const collections = () => {

    const utilsObject = {

        shuffle: (arr) => {
            let currentIndex = arr.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [arr[currentIndex], arr[randomIndex]] = [
                    arr[randomIndex], arr[currentIndex]];
            }
            return arr;
        },

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
    return { ...utilsObject }
}


export const pages = () => {

    const utilsObject = {

        getPageProps: (page) => {
            return page?.data ?? null
        },

        setPageProps: ({ pageData, revalidate }) => {
            return {
                props: {
                    page: pageData
                },
                revalidate: revalidate ?? 1
            }
        }
    }
    return { ...utilsObject }
}


export const formatters = () => {

    const utilsObject = {

        getMedia: () => { },
        getName: () => { },
        getURL: () => { }
    }

    return { ...utilsObject }

}