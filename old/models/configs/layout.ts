import type { LayoutProps } from "@typings/Layout"

import { default as headerConfig } from "@configs/header"
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"

const layout = ({ header, footer, menu, metaData, contact }: LayoutProps) => {

    const defaultObject: LayoutProps = {
        header: headerConfig({}),
        footer: footerConfig({}),
        menu: menuConfig({}),
        metaData: {},
        contact: {}
    }

    const layoutObject: LayoutProps = {
        header: headerConfig({ ...header }) ?? defaultObject?.header,
        footer: footerConfig({ ...footer }) ?? defaultObject?.footer,
        menu: menuConfig({ ...menu }) ?? defaultObject?.menu,
        metaData: metaData ?? defaultObject?.metaData,
        contact: contact ?? defaultObject?.contact

    }

    return { ...layoutObject } as LayoutProps ?? null
}


export default layout