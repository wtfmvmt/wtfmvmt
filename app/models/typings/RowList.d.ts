import type { ImageProps } from "@typings/Image"

export type ListProps = {
    image?: ImageProps,
    title?: string,
    description?: string
}

export type RowListProps = {
    title?: string,
    list?: ListProps[]
}