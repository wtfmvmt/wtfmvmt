import type { CallToActionProps } from "@typings/CallToAction"
import type { LinkProps }  from "@typings/Link"

export type MediaCarousel = {
    src?: string,
    alt?: string,
}[]

export type ActionLink = {
    name?: string,
    url?: string,
    icon?: string
}


export type SocialLink = {
    url: string,
    name?: string,
    icon?: string
}


export type Feature = {
    name?: string,
    url?: string
    image: any
}

export type HeroProps = {
    title?: string,
    mediaCarousel?: MediaCarousel
    description?: string,
    cta?: CallToAction,
    features?: {
        heading?: string,
        featured?: Feature[]
    }
    actionLinks?: {
        title?: string,
        links?: ActionLink[]
    }
    socialLinks?: SocialLink[]
}
