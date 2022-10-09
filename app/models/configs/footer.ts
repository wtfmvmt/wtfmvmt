// 📃[TODO]: Correct Interface Parameters
//import type { IConfiguration } from "@typings/Configuration"
//import type { FooterProps } from "@typings/Footer"

const footer = ({ ...props }) => {

    const { impressum, logo, socials, copyright, links, email } = props ?? null

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
