import type { FooterProps } from "@typings/Footer"

const footer = ({ favicon, socials, links, impressum, copyright }: FooterProps) => {

    const defaultObject: FooterProps = {
        copyright: ["COPYRIGHT_NOT_FOUND", "COPYRIGHT_NOT_FOUND", "COPYRIGHT_NOT_FOUND"],
        impressum: "IMPRESSUM_NOT_FOUND",
        socials: [],
        links: [],
        favicon: {
            image: {
                src: '',
                alt: ''
            }
        },

    }

    const footerObject: FooterProps = {
        copyright: copyright ?? defaultObject?.copyright,
        impressum: impressum ?? defaultObject?.impressum,
        socials: socials ?? defaultObject?.socials,
        links: links ?? defaultObject?.links,
        favicon: favicon ?? defaultObject?.favicon
    }

    return { ...footerObject } ?? null as FooterProps
}

export default footer