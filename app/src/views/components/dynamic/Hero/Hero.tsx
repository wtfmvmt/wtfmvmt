import DistortionCarousel from "@components/dynamic/DistortionCarousel"
import Heading from "@components/dynamic/Hero/Heading"
import EventsSubscriptionWidget from "@components/dynamic/Hero/EventsSubscriptionWidget"
import type { CallToActionProps } from "@typings/CallToAction";
import type { ImageProps } from "@typings/Image"
import { Carousel } from 'react-responsive-carousel';

export interface Props {
    images?: ImageProps[];
    title?: string;
    cta?: CallToActionProps;
}

export const defaultProps = {
    images: [...new Array<ImageProps>(7).map((image) => ({
        src: `${image}`,
        alt: `${image}`
    }))],
    title: "[@props]: TITLE_NOT_FOUND"
}
export default function Hero({ title, cta, images }: Props) {


    return (
        <section className="pb-40 z-0">
            <div className="pb-5 relative z-0">
                <div className="absolute bottom-0 left-0 h-5 w-1/2 bg-white" />
                <div className=" sm:block absolute bottom-0 right-0 h-26 w-26 bg-white">
                    <div className="absolute bottom-0 left-1/2 mb-8 transform translate-x-1/2">
                        <div className="h-26 w-px bg-white" />
                        <div className="h-18 w-px bg-gray-800" />
                    </div>
                </div>
                <div className="w-full relative m-0">
                    <Carousel className="absolute top-0" showThumbs={false} autoPlay>
                        {
                            images?.map((image) => (
                                <img loading="lazy" className="w-full object-fit" src={image as string} />
                            ))
                        }

                    </Carousel>


                    <div className="container px-4 mx-auto relative">
                        <div className="flex flex-wrap -mx-4">
                            <EventsSubscriptionWidget />
                            <Heading title={title} cta={cta} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

