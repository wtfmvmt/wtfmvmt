import meta from "@configs/meta"
import links from "@configs/links"
import { LinkTypes } from "@models/typings/Links"


const menu = () => {

    const { logo: siteLogo } = meta()

    const menuLinks = links().find((link) => link.type === LinkTypes.SITE_PAGE)


    return {
        favicon: siteLogo,
        links: menuLinks,
        cta: []
    }
}

export default menu