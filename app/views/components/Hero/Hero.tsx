import DistortionCarousel from "@components/DistortionCarousel";
import FadeAnimation from "@components/FadeAnimation";
import type { ComponentType } from "@typings/Component";
import type { HeroProps } from "@typings/Hero";
import { SocialIcon } from "react-social-icons";


const Hero: ComponentType<HeroProps> = ({ title, description, cta, features, actionLinks, socialLinks, mediaCarousel }: HeroProps) => {


    const SocialLinks = () => {

        return (
            socialLinks ? <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">
                {
                    socialLinks.map((link, index) => (<SocialIcon key={index} bgColor="white" url={link?.url} className="hvr-pop mr-2 inline-flex items-center justify-center w-16 h-16 hover:text-purple-600 p-2 transition-all hover:bg-opacity-90 hover:rounded" />))
                }

            </div> : <>SOCIALS_NOT_FOUND</>
        )
    }


    const FeaturedGallery = () => (

        mediaCarousel ? <div className="w-full lg:w-2/3 px-3">

            <div className="flex flex-wrap h-full">

                <div className="w-full z-50 h-full puff-in-center ">
                    <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={mediaCarousel} />
                </div>

            </div>

        </div> : <>FEATUARED_GALLERY_NOT_FOUND</>
    )

    const ActionLinks = () => (

        actionLinks ? <div className="left-0 mt-20 lg:w-1/3 px-4 mb-8 lg:mb-0 bg-black bg-opacity-60 absolute w-full z-50">
            <div className="px-4 md:px-8 py-12 ">
                <h4 className="pl-8 mb-2 text-md font-major font-bold font-heading text-slate-200 uppercase">
                    {actionLinks?.title}
                </h4>
                <ul className="mb-5">
                    <FadeAnimation triggerOnce cascade>
                        {
                            actionLinks?.links?.map((link, index) => {
                                return (
                                    <li key={index} className="cursor-pointer rounded transition-all hover:bg-black bg-opacity-80 py-5 px-8 border-b group">
                                        <a
                                            className="hvr-wobble-horizontal group-hover:font-major ease-in-out flex items-center text-lg font-share_tech text-slate-200 font-bold font-heading hover:text-blue-300"
                                            href={link?.url}
                                        >
                                            <span><img loading="lazy" src={link?.icon} className="h-8 inline" />{link?.name}</span>
                                        </a>
                                    </li>
                                )
                            })}

                    </FadeAnimation>

                </ul>

            </div>
        </div> : <></>



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

        <div className="max-w-3xl mx-auto py-24 text-center font-major text-slate-200">
            <h2 className="mb-8 text-5xl xl:text-6xl font-bold font-heading">
                {title ? title : "TITLE_NOT_FOUND"}
            </h2>
            <h4 className="mb-8 text-md font-bold">
                {description ? description : "DESCRIPTION_NOT_FOUND"}
            </h4>
            {
                cta ? <a
                    className="cursor-pointer inline-block hvr-pop bg-purple-900 hover:bg-black text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                    href={cta ? cta?.url : "CTA_NOT_FOUND"}
                >
                    {cta ? cta?.name : "CTA_NOT_FOUND"}
                </a> : <>CTA_NOT_FOUND</>
            }
        </div>
    )

    return (
        <section>

            <div className="relative py-4 -translate-y-11 overflow-hidden">
                <div className="w-full z-50 h-full puff-in-center ">
                    <div className="absolute left-0 w-full z-50">
                        <ActionLinks />
                    </div>
                    <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={mediaCarousel} />
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