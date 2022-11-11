import { ImageProps } from "@typings/Image"

export type MasonProps = {
    title?: string,
    heading?: string,
    image?: ImageProps,
    url?: string
}

export type ImageMasonryProps = {
    name?: string,
    heading?: string,
    title?: string,
    description?: string,
    masonry?: MasonProps[]
}

