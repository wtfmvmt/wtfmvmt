export type Table = {
    title: string,
    description?: string,
    pricing?: {
        rate?: string,
        unit?: string,

    }
    cta?: {
        primary: CallToAction,
        secondary: CallToAction
    },
    features?: {
        name?: string
    }[]
}


export type StatsSectionProps = {
    heading?: string,
    title?: string,
    description?: string,
    tables?: Table[]
}