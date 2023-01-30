import type { CallToActionProps } from "@typings/CallToAction"
import type { FaviconProps } from "@typings/Favicon"
import type { LinkProps } from "@typings/Link"

export type DrawerMenuProps = {
    favicon?: FaviconProps,
    links?: LinkProps[],
    cta?: CallToActionProps[]
}
