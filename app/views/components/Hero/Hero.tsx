import FadeAnimation from "@components/FadeAnimation"
import type { ComponentType } from "@typings/Component"
import type { HeroProps } from "@typings/Hero"
import { SocialIcon } from "react-social-icons"
import { memo } from "react"
import Loader from "@includes/Loader"
import dynamic from "next/dynamic"

const Hero: ComponentType<HeroProps> = ({ title, description, cta, features, actionLinks, socialLinks, mediaCarousel }: HeroProps) => {


    const DistortionCarousel = dynamic(() => import("@components/DistortionCarousel"), {
        loading: () => <Loader />,
        ssr: false
    })

    const SocialLinks = () => {

        return (
            socialLinks ?
                <div className="top-0 right-0 mt-16 text-center xl:mt-24 xl:mr-8 xl:absolute xl:transform xl:-translate-y-1/2">
                    {socialLinks.map((link, index) => (<SocialIcon key={index} bgColor="white" url={link?.url} className="inline-flex items-center justify-center w-16 h-16 p-2 m-2 transition-all hvr-pop hover:opacity-70" />))}
                </div>
                :
                <>SOCIALS_NOT_FOUND</>
        )
    }


    const ActionLinks = () => (

        actionLinks ? <div className="rounded absolute left-0 z-50 w-full px-4 mt-20 mb-8 bg-black lg:w-1/3 lg:mb-0 bg-opacity-30">
            <div className="px-4 py-12 md:px-8 ">
                <h4 className="pl-8 mb-2 font-bold uppercase text-md font-major font-heading text-slate-200">
                    {actionLinks?.title ?? "[CLIENT]:TITLE_NOT_FOUND"}
                </h4>
                <ul className="mb-5">
                    <FadeAnimation duration={500} triggerOnce cascade>
                        {
                            actionLinks?.links?.map((link, index) => {
                                return (
                                    <li key={index} className="px-8 py-5 transition-all border-b rounded cursor-pointer hover:bg-black bg-opacity-80 group">
                                        <a
                                            className="flex items-center text-lg font-bold ease-in-out hvr-wobble-horizontal group-hover:font-major font-share_tech text-slate-200 font-heading hover:text-blue-300"
                                            href={link?.url}
                                        >
                                            <span>{link?.name}</span>
                                        </a>
                                    </li>
                                )
                            })}

                    </FadeAnimation>

                </ul>

            </div>
        </div> : <>[CLIENT]: ACTIONLINKS_NOT_FOUND</>



    )


    const FeaturedRow = () => (

        <div className="py-12 lg:py-24 ">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-3 -mb-3 text-black">
                    {
                        features?.featured ?
                            features.featured.map((feature, index) => {

                                return (
                                    <div key={index} className="w-full p-3 hvr-pop md:w-1/2 lg:w-1/6">
                                        <a href={feature.url} className="flex items-center justify-center bg-black shadow-xl h-36 bg-opacity-80">
                                            <h1 className="absolute bottom-0 items-center font-bold text-white transition-all opacity-0 hover:opacity-90 text-wrap font-heading">{feature?.name ? feature?.name : "NAME_NOT_FOUND"}</h1>
                                            <img
                                                className="h-32 mx-auto shawdow-xl"
                                                loading="lazy"
                                                src={feature?.image?.src}
                                                alt={feature?.image?.alt}
                                            />

                                        </a>
                                    </div>
                                )
                            }) : <>❌[CLIENT]: FEATURES_NOT_FOUND</>
                    }

                </div>
            </div>
        </div>

    )

    const Heading = () => (

        <div className="max-w-3xl py-24 mx-auto text-center font-major text-slate-200">
            <h2 className="mb-8 text-5xl font-bold xl:text-6xl font-heading">
                {title ? title : "TITLE_NOT_FOUND"}
            </h2>
            <h4 className="mb-8 font-bold text-md">
                {description ? description : "DESCRIPTION_NOT_FOUND"}
            </h4>
            {
                cta ? <a
                    className="inline-block px-8 py-6 font-bold text-white uppercase transition duration-200 bg-purple-900 rounded-md cursor-pointer animate-pulse hvr-pop hover:bg-black font-heading"
                    href={cta ? cta?.url : "CTA_NOT_FOUND"}
                >
                    {cta ? cta?.name : "CTA_NOT_FOUND"}
                </a> : <>CTA_NOT_FOUND</>
            }
        </div>
    )

    return (
        <section>
            <div className="relative py-4 overflow-hidden -translate-y-11">
                <div className="z-50 w-full h-full">
                    <div className="absolute left-0 z-50 w-full">
                        <ActionLinks />
                    </div>
                    <DistortionCarousel displacmentImage="/assets/images/distortions/1.jpg" images={mediaCarousel} />
                </div>
            </div>

            <div className="container relative px-4 mx-auto">
                <SocialLinks />
                <Heading />
            </div>

            <FeaturedRow />

        </section>
    )
}

export default memo(Hero)