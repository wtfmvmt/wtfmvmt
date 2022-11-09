import type { CallToActionProps } from "@typings/CallToAction"


export type FeatureProps = {
    name?: string,
    url?: string
}

export type TableProps = {
    title?: string,
    heading?: string,
    value?: string | number,
    features?: FeatureProps[],
    cta?: CallToActionProps
}

export type TableRowProps = {
    tables?: TableProps[],
    heading?: string,
    title?: string,
}