import type { ImageProps } from "@typings/Image"

export type ColumnData = {
    name?: string,
    description?: string,
    icon?: ImageProps | string
}

export type ColumnListProps = {
    title?: string,
    list?: ColumnData[]

}