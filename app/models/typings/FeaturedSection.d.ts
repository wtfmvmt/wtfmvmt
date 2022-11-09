export type FeatureProps = {
    title?: string,
    description?: string,
    cover?: string
}

export type FeaturedSectionProps = {
    heading?: string,
    carousel?: string[],
    title?: string,
    description?: string
    features?: FeatureProps[]
}
