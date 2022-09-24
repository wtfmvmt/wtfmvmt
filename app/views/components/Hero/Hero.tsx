import DistortionCarousel from "@components/DistortionCarousel";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Fade } from "react-awesome-reveal";
import { SocialIcon } from 'react-social-icons';
import ReactTypingEffect from 'react-typing-effect';
import Carousel from 'react-spring-3d-carousel-2';
import Icon from "@components/Icon"
import type { Image } from "@typings/Image"


import { Carousel as FallBackCarousel } from 'react-responsive-carousel';

export type MediaCarousel = string[]

export type Link = {
    name: string,
    url: string
}

export type ActionLink = {
    name: string,
    url: string,
    icon?: string
}

export type CallToAction = {
    name: string,
    url: string
}

export type SocialLink = {
    url: string,
}


export type Feature = {
    name?: string,
    url?: string
    image?: Image
}

export type HeroProps = {
    name?: string,
    version?: string | number,
    payload?: any,
    title: string,
    mediaCarousel: MediaCarousel
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

const $Hero = ({ payload, title, mediaCarousel, description, cta, features, actionLinks, socialLinks }: HeroProps) => {

    const PropsObject: HeroProps = {
        name: 'hero',
        payload: payload ? payload : "No payload",
        title: title ? title : "TITLE_PROPERTY_NOT_FOUND",
        mediaCarousel: mediaCarousel ? mediaCarousel : ["MEDIA_CAROUSEL_PROPERTY_NOT_FOUND"],
        description: description ? description : "DESCRIPTION_PROPERTY_NOT_FOUND",
        cta: cta ? cta : { name: "CTA_PROPERTY_NOT_FOUND", url: "#" },
        features: features ? features : { heading: "FEATURES_PROPERTY_NOT_FOUND", featured: [{ image: { src: "https://via.placeholder.com/150", alt: '' }, name: 'FEATURE_PROPERTY_NOT_FOUND' }] },
        actionLinks: actionLinks ? actionLinks : { title: "ACTION_LINKS_PROPERTY_NOT_FOUND", links: [{ name: "ACTION_LINKS_PROPERTY_NOT_FOUND", url: "#" }] },
        socialLinks: socialLinks ? socialLinks : [{ url: "#" }]
    }

    return PropsObject
}

const Hero = ({ mediaCarousel, actionLinks, cta, title, description, socialLinks, features }: HeroProps) => {

    const SocialLinks = () => {

        return (
            <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">

                {
                    socialLinks.map((link, index) => (

                        <a
                            key={index}
                            className="hvr-pop mr-2 inline-flex items-center justify-center w-16 h-16 rounded-full"
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

        <div className="w-full lg:w-2/3 px-3">

            <div className="flex flex-wrap h-full">

                <div className="w-full z-50 h-full puff-in-center ">
                    <DistortionCarousel images={mediaCarousel} />
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
                    <Fade triggerOnce cascade>
                        {
                            actionLinks.links.map((link, index) => {
                                return (
                                    <li key={index} className="rounded transition-all hover:bg-black bg-opacity-80 py-5 px-8 border-b">
                                        <a
                                            className="hvr-wobble-horizontal flex items-center text-lg jello-diagonol-1 font-bold font-heading hover:text-purple-400"
                                            href={link.url}
                                        >
                                            <Icon id={link.icon} />
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

                                <div key={index} className="hvr-pop w-full md:w-1/2 lg:w-1/6 p-3">
                                    <a href={feature.url} className="h-36 flex justify-center items-center bg-black bg-opacity-80 shadow-xl">
                                        <h1 className="transition-all opacity-0 hover:opacity-90 absolute text-wrap bottom-0 font-heading items-center text-white font-bold">{feature.name ? feature.name : "Test"}</h1>
                                        <img
                                            className="mx-auto shawdow-xl h-32"
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
                className="inline-block hvr-pop bg-purple-900 hover:bg-black text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
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

export { $Hero }
export default Hero