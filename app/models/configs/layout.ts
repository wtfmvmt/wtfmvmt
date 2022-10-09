//import type { IConfiguration } from "@typings/Configuration"
//import type { LayoutDataProps } from "@typings/Layout"

import header from "@configs/header"
import footer from "@configs/footer"
import menu from "@configs/menu"

const layout = ({ headerObject, footerObject, menuObject }) => {

    const layoutObject = {
        header: header(headerObject),
        footer: footer(footerObject),
        menu: menu(menuObject)
    }

    return { ...layoutObject } ?? null
}


export default layout