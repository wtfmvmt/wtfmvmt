import type { Favicon } from "@typings/Favicon"
import type { NavLink } from "@typings/NavLink"
import type { CallToAction } from "@typings/CallToAction"
import type { BannerProps } from "@typings/Banner"

export type Title = {
    name: string,
    url: string,
}

export type SearchQuery = {
    id: string,
    reference?: string
}


export type Search = SearchQuery[]

export type HeaderProps = {
    favicon: Favicon,
    cta: CallToAction,
    banner: BannerProps,
    title?: Title,
    search?: Search
}
