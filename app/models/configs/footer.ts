
import meta from "@configs/meta"

import type { IConfiguration } from "@typings/Configuration"
import type { FooterProps } from "@typings/Footer"

const footer: IConfiguration<FooterProps> = () => {

    const { impressum, logo, socials, copyright, links, email } = meta()

    const footerObject = {
        impressum,
        links,
        copyright,
        socials,
        email,
        logo,
    }

    return { ...footerObject } ?? null
}

export default footer
