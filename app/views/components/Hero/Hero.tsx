import DistortionCarousel from "@components/DistortionCarousel";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Fade } from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';
import ReactTypingEffect from 'react-typing-effect';
import Carousel from 'react-spring-3d-carousel-2';

import type { Image } from "@typings/Image"

export type MediaCarousel = string[]

export type Link = {
    name: string,
    url: string
}

export type ActionLink = {
    name: string,
    url: string
}

export type CallToAction = {
    name: string,
    url: string
}

export type SocialLink = {
    url: string,
}


export type Feature = {
    url?: string
    image: Image
}

export type HeroProps = {
    title: string,
    mediaCarousels: MediaCarousel[]
    description: string,
    cta: CallToAction,
    features?: {
        heading: string,
        featured: Feature[]
    }
    actionLinks?: {
        title: string,
        links: ActionLink[]
    }
    socialLinks?: SocialLink[]
}



const Hero = ({ mediaCarousels, actionLinks, cta, title, description, socialLinks, features }: HeroProps) => {

    const SocialLinks = () => {

        return (
            <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">

                {
                    socialLinks.map((link, index) => (

                        <a
                            key={index}
                            className="mr-2 inline-flex items-center justify-center w-16 h-16 rounded-full"
                            href="#"
                        >
                            <SocialIcon bgColor="white" url={link.url} />
                        </a>
                    ))
                }

            </div>
        )
    }


    const FeaturedGallery = () => (
        <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap h-full">
                <div className="w-full md:w-7/12 z-50">

                    <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={mediaCarousels[0]} />

                </div>
                <div className="w-full md:w-5/12 z-50">
                    <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={mediaCarousels[1]} />
                </div>
            </div>
        </div>
    )

    const ActionLinks = () => (

        actionLinks &&

        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="px-4 md:px-8 py-12 ">
                <h4 className="pl-8 mb-2 text-sm font-bold font-heading text-white uppercase">
                    {actionLinks.title}
                </h4>
                <ul className="mb-5">
                    <Fade cascade>
                        {
                            actionLinks.links.map((link, index) => {
                                return (
                                    <li key={index} className="rounded transition-all hover:bg-black bg-opacity-80 py-5 px-8 border-b">
                                        <a
                                            className="hvr-wobble-horizontal flex items-center text-lg jello-diagonol-1 font-bold font-heading hover:text-purple-400"
                                            href={link.url}
                                        >
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                )
                            })}

                    </Fade>

                </ul>

            </div>
        </div>

    )


    const FeaturedRow = () => (

        <div className="py-12 lg:py-24 ">
            <div className="container mx-auto px-4">
                <h4 className="lg:ml-16 mb-6 font-bold font-heading text-gray-200 text-sm">
                    {features && features.heading}
                </h4>
                <div className="flex flex-wrap text-black -mx-3 -mb-3">
                    {
                        features && features.featured.map((feature, index) => {

                            return (

                                <div key={index} className="w-full md:w-1/2 lg:w-1/6 p-3">
                                    <a href={feature.url} className="h-28 flex items-center bg-black bg-opacity-80 shadow-xl">
                                        <img
                                            className="mx-auto shawdow-xl h-24"
                                            src={feature.image.src}
                                            alt={feature.image.alt}
                                        />
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )

    const Heading = () => (

        <div className="max-w-3xl mx-auto py-24 text-center">
            <h2 className="mb-8 text-5xl xl:text-6xl font-bold font-heading">
                {`${title}`}
            </h2>
            <h4 className="mb-8 text-sm font-bold">

                <ReactTypingEffect speed={50} eraseSpeed={10} typingDelay={40} text={description} />


            </h4>
            <a
                className="inline-block bg-purple-900 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                href={cta && cta.url}
            >
                {cta && cta.name}
            </a>
        </div>
    )

    return (
        <section>

            <div className="relative py-12 overflow-hidden">

                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <ActionLinks />
                        <FeaturedGallery />
                    </div>
                </div>
            </div>

            <div className="relative container mx-auto px-4">
                <SocialLinks />
                <Heading />
            </div>

            <FeaturedRow />

        </section>
    )
}

export default Hero