import type { CallToActionProps } from "@typings/CallToAction"


export type FeatureProps = {
    name?: string,
    url?: string
}

export type TableProps = {
    title?: string,
    subTitle?: string,
    price?: string,
    features?: FeatureProps[],
    cta?: CallToActionProps
}

export type TableRowProps = {
    tables?: TableProps[],
    heading?: string,
    title?: string,
}