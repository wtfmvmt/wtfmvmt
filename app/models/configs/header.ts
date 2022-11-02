
import type { HeaderProps } from "@typings/Header"

const header = ({ favicon, banner, cta, search }: HeaderProps) => {


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

        banner: {
            messages: ['BANNER_NOT_FOUND'],
        }

    }

    const headerObject: HeaderProps = {
        favicon: favicon ?? defaultObject?.favicon,
        search: search ?? defaultObject?.search,
        banner: banner ?? defaultObject?.banner
    }

    return { ...headerObject } as HeaderProps
}


export default header