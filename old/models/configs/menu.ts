import { MenuProps } from "@typings/Menu"

const menu = ({ links, cta, favicon }: MenuProps) => {

    const defaultObject: MenuProps = {
        links: [
            {
                name: "LINK_NOT_FOUND"
            }
        ],
        favicon: {
            image: {
                src: "IMAGE_NOT_FOUND",
                alt: 'IMAGE_NOT_FOUND'
            }
        },
        cta: [
            {
                name: "CTA_NOT_FOUND"
            }
        ]

    }


    const menuObject: MenuProps = {
        links: links ?? defaultObject?.links,
        cta: cta ?? defaultObject?.cta,
        favicon: favicon ?? defaultObject?.favicon
    }


    return { ...menuObject } ?? null as MenuProps


}

export default menu