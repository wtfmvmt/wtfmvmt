import type { FaviconProps } from "@typings/Favicon"
import type { NavLink } from "@typings/NavLink"
import type { CallToActionProps } from "@typings/CallToAction"
import type { BannerProps } from "@typings/Banner"

export type Title = {
    name: string,
    url: string,
}

export type SearchQuery = {
    id?: string,
    url?: string
}


export type Search = SearchQuery[]

export type HeaderProps = {
    favicon?: FaviconProps,
    cta?: CallToActionProps,
    banner?: BannerProps,
    search?: SearchQuery[]
}
