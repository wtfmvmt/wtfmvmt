
import type { HeaderProps } from "@typings/Header"

const header = ({ favicon, banner, cta, title, search }: HeaderProps) => {


    const defaultObject: HeaderProps = {
        title: "TITLE_NOT_FOUND",
        favicon: {
            image: {},
            url: "/"
        },

        banner: {
            messages: [''],
        }

    }

    const headerObject: HeaderProps = {
        title: title ?? defaultObject?.title,
        favicon: favicon ?? defaultObject?.favicon,
        banner: banner ?? defaultObject?.banner
    }

    return { ...headerObject } as HeaderProps
}


export default header