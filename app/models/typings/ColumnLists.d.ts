import type { ImageProps } from "@typings/Image"

export type ColumnData = {
    name?: string,
    description?: string,
    icon?: ImageProps
}

export type ColumnListProps = {
    title?: string,
    list?: ColumnData[]

}