export type SectionProps = {
    title?: string,
    description?: string
}
export type VideoProps = {
    url?: string,
    pip?: boolean
}

export type SummaryProps = {
    heading?: string,
    video?: VideoProps,
    title?: string,
    description?: string,
    sections?: SectionProps[]
}

