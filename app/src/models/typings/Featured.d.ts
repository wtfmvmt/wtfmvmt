export type FeatureProps = {
    title?: string,
    description?: string,
    cover?: string
}

export type FeaturedProps = {
    heading?: string,
    carousel?: string[],
    title?: string,
    description?: string
    features?: FeatureProps[]
}
