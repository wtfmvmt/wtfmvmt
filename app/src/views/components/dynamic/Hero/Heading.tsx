import type { CallToActionProps } from "@typings/CallToAction";

export interface Props {
    title?: string;
    subTitle?: string;
    cta?: CallToActionProps
}

export const defaultProps: Props = {
    title: "[@props]: TITLE_NOT_FOUND",
    subTitle: "[@props]: SUBTITLE_NOT_FOUND",
    cta: {
        name: "[@props]: CTA_NOT_FOUND",
        url: "[@props]: CTA_NOT_FOUND"
    }
}

export default function Heading({ title, cta, subTitle }: Props) {
    return (
        <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl py-24 md:pt-52 lg:pb-72">
                <h1 className="font-heading font-bold font-major_mono text-9xl text-white mb-16">
                    {title ?? defaultProps.title}
                </h1>
                <h2 className="font-heading font-share_tech text-3xl text-white mb-16">
                    {subTitle ?? defaultProps.subTitle}
                </h2>
                <a
                    className="inline-block font-major_mono w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                    href={cta?.url ?? defaultProps.cta.url}
                >
                    {cta?.name ?? defaultProps.cta.name}
                </a>
            </div>
        </div>
    )
}