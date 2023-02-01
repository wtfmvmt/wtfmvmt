import DistortionCarousel from "@components/dynamic/DistortionCarousel"
import Heading from "@components/dynamic/Hero/Heading"
import EventsSubscriptionWidget from "@components/dynamic/Hero/EventsSubscriptionWidget"
import type { CallToActionProps } from "@typings/CallToAction";
import type { ImageProps } from "@typings/Image"
import { useState, useEffect } from "react"
export interface Props {
    images?: ImageProps[];
    title?: string;
    subTitle?: string;
    cta?: CallToActionProps;
}

export const defaultProps = {
    images: [...new Array<ImageProps>(7).map((image) => ({
        src: `${image}`,
        alt: `${image}`
    }))],

    subTitle: "",
    title: "[@props]: TITLE_NOT_FOUND"
}
export default function Hero({ title, subTitle, cta, images }: Props) {

    const [imageIndex, setImageIndex] = useState(0)


    useEffect(() => {

        const MAX_REEL_LENGTH = images.length

        setInterval(() => {
            setImageIndex(imageIndex + 1)
        }, 4000)
    }, [imageIndex])

    return (
        <section className="pb-40 z-0">
            <div className="pb-5 relative z-0">
                <div className="absolute bottom-0 left-0 h-5 w-1/2 bg-white" />
                <div className="hidden sm:block absolute bottom-0 right-0 h-26 w-26 bg-white">
                    <div className="absolute bottom-0 left-1/2 mb-8 transform translate-x-1/2">
                        <div className="h-26 w-px bg-white" />
                        <div className="h-18 w-px bg-gray-800" />
                    </div>
                </div>
                <div className="sm:mr-26 relative">


                    <div className="absolute top-0 left-0 w-full h-screen block object-cover">
                        <img className="h-full object-cover w-full" src={images[imageIndex] as string} />
                    </div>


                    <div className="container px-4 mx-auto relative">
                        <div className="flex flex-wrap -mx-4">
                            <EventsSubscriptionWidget />
                            <Heading subTitle={subTitle} title={title} cta={cta} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

