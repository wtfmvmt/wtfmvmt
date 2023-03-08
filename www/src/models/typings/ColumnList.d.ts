import { CallToActionProps } from '@typings/CallToAction';
import type { ImageProps } from "@typings/Image"

export type ColumnData = {
    name?: string,
    description?: string,
    icon?: string
}

export type ColumnListProps = {
    title?: string,
    list?: ColumnData[],
    cta?: CallToActionProps

}