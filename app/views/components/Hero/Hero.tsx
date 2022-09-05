import DistortionCarousel from "@components/DistortionCarousel";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Fade } from "react-awesome-reveal";



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
    name: string,
}

export type HeroProps = {
    title: string,
    mediaCarousels: MediaCarousel[]
    description: string,
    cta: CallToAction,
    actionLinks?: ActionLink[]
    socialLinks?: SocialLink[]
}



const Hero = ({ mediaCarousels, actionLinks, cta, title, description, socialLinks }: HeroProps) => {

    const SocialLinks = () => (
        <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">

            <a
                className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 rounded-full"
                href="#"
            >
                <FacebookIcon />
            </a>
            <a
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                href="#"
            >
                <FacebookIcon />
            </a>
            <a
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                href="#"
            >
                <FacebookIcon />
            </a>
            <a
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                href="#"
            >
                <FacebookIcon />
            </a>
            <a
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                href="#"
            >
                <FacebookIcon />
            </a>
        </div>
    )


    const FeaturedGallery = () => (
        <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap h-full">
                <div className="w-full md:w-7/12">
                    <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={mediaCarousels[0]} />

                </div>
                <div className="w-full md:w-5/12">
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
                  "Action Links"
                </h4>
                <ul className="mb-5">
                    <Fade cascade>
                        {
                            actionLinks.map((link, index) => {
                                return (
                                    <li key={index} className="py-5 px-8 border-b">
                                        <a
                                            className="flex items-center text-lg font-bold font-heading hover:text-blue-300"
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
                <h4 className="lg:ml-16 mb-6 font-bold font-heading text-gray-500 text-xs">
                    TRUSTED BY BRANDS ALL OVER THE WORLD
                </h4>
                <div className="flex flex-wrap text-black -mx-3 -mb-3">
                    <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                        <div className="h-28 flex items-center bg-white shadow-xl">
                            <img
                                className="mx-auto"
                                src="yofte-assets/brands/exxon.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                        <div className="h-28 flex items-center bg-white shadow-xl">
                            <img
                                className="mx-auto"
                                src="yofte-assets/brands/ea-sports.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                        <div className="h-28 flex items-center bg-white shadow-xl">
                            <img
                                className="mx-auto"
                                src="yofte-assets/brands/eurosport.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                        <div className="h-28 flex items-center bg-white shadow-xl">
                            <img
                                className="mx-auto"
                                src="yofte-assets/brands/nike.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                        <div className="h-28 flex items-center bg-white shadow-xl">
                            <img className="mx-auto" src="yofte-assets/brands/aol.svg" alt="" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/6 p-3">
                        <div className="h-28 flex items-center bg-white shadow-xl">
                            <img
                                className="mx-auto"
                                src="yofte-assets/brands/north-face.svg"
                                alt=""
                            />
                        </div>
                    </div>
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
                {description}
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