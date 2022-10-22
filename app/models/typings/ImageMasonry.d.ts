import { ImageProps } from "@models/typings/Image"

export type ContentProps = {
    title?: string,
    heading?: string,
    key?: any,
    image?: ImageProps
}

export type ImageMasonryProps = {
    name?: string,
    heading?: string,
    title?: string,
    description?: string,
    masonry?: ContentProps[]
}

