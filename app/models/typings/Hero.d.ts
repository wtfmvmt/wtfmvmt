export type MediaCarousel = string[]

export type Link = {
    name: string,
    url: string
}

export type ActionLink = {
    name: string,
    url: string,
    icon?: string
}

export type CallToAction = {
    name: string,
    url: string
}

export type SocialLink = {
    url: string,
}


export type Feature = {
    name?: string,
    url?: string
    image: Image
}

export type HeroProps = {
    title?: string,
    mediaCarousel?: MediaCarousel,
    description?: string,
    cta?: CallToAction,
    features?: {
        heading?: string,
        features?: Feature[]
    }
    actionLinks?: {
        heading?: string,
        actionLinks?: ActionLink[]
    }
    socialLinks?: SocialLink[]
}
