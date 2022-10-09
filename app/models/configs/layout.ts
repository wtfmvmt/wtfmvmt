//import type { IConfiguration } from "@typings/Configuration"
//import type { LayoutDataProps } from "@typings/Layout"

import header from "@configs/header"
import footer from "@configs/footer"

const layout = ({ headerObject, footerObject }) => {

    const layoutObject = {
        header: header(headerObject),
        footer: footer(footerObject)
    }

    return { ...layoutObject } ?? null
}


export default layout