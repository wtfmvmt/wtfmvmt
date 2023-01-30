import type { ContactProps } from "@typings/Contact"
import type { DrawerMenuProps } from "@typings/DrawerMenu"
import type { MetaProps } from "@typings/Meta"
import type { HeaderProps } from "@typings/Header"
import type { FooterProps } from "@typings/Footer"
import type { ComponentType } from "@typings/Component"

export type LayoutProps = {
    metaData?: MetaProps,
    menu?: DrawerMenuProps,
    contact?: ContactProps,
    header?: HeaderProps,
    footer?: FooterProps,
    children?: ComponentType<any> & React.Node | string 
}