import type { ImageProps } from "@typings/Image"

export type ColumnData = {
    name?: string,
    description?: string,
    icon?: ImageProps
}

export type ColumnProps = {
    title?: string,
    columns?: ColumnData[],
}


export type ColumnListProps = {
    title?: string,
    lists?: ColumnProps[]

}