import type { FaviconProps } from "@models/typings/Favicon"
import type { LinkProps } from "@typings/Link"
import { CallToActionProps } from "@typings/CallToAction"


export type MenuProps = {
    favicon?: FaviconProps,
    links?: LinkProps[],
    cta?: CallToActionProps[]
}