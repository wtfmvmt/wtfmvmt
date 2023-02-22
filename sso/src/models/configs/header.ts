
import type { HeaderProps } from "@typings/Header"

const header = ({ favicon, banner, cta, search, breadcrumbs }: HeaderProps) => {


    const defaultObject: HeaderProps = {
        favicon: {
            image: {},
            url: "/"
        },
        search: [
            {
                id: "SEARCH_NOT_FOUND",
                url: "#SEARCH_NOT_FOUND"
            },
            {
                id: "SEARCH_NOT_FOUND",
                url: "#SEARCH_NOT_FOUND"
            },
            {
                id: "SEARCH_NOT_FOUND",
                url: "#SEARCH_NOT_FOUND"
            }
        ],
        breadcrumbs: [],

        banner: {
            messages: ['BANNER_NOT_FOUND'],
        }

    }

    const headerObject: HeaderProps = {
        favicon: favicon ?? defaultObject?.favicon,
        search: search ?? defaultObject?.search,
        breadcrumbs: breadcrumbs ?? defaultObject?.breadcrumbs,
        banner: banner ?? defaultObject?.banner
    }

    return { ...headerObject } as HeaderProps
}


export default header