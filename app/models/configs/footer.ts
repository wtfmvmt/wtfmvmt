
import meta from "@configs/meta"

import type { IConfiguration } from "@typings/Configuration"
import type { FooterProps } from "@typings/Footer"

const footer: IConfiguration<FooterProps> = () => {

    const { impressum, logo, socials, copyright, links } = meta()

    const footerObject = {
        impressum,
        links,
        copyright,
        socials,
        logo,
    }

    return { ...footerObject } ?? null
}

export default footer
