import type { CallToActionProps } from "@models/typings/CallToAction";
import type { ImageProps } from "@models/typings/Image";
export interface IHero {
    heading?: string;
    title?: string;
    description?: string;
    cta?: CallToActionProps;
    banner?: ImageProps
}

export const defaultProps = {
    heading: "HEADING_NOT_FOUND",
    title: "We The Future MVMT",
    description: "DESCRIPTION_NOT_FOUND",
    banner: {
        src: "https://res.cloudinary.com/facade-os/image/upload/v1675361093/Fa%C3%A7ade/WTFMVMT/media/Group_Photo_of_WTFMVMT_Members_with_Sincere_Smiles_k79ilq.jpg"
    },
    cta: {
        name: "CTA_NOT_FOUND"
    }
}

export default function Hero({ heading, title, description, cta, banner }: IHero) {
    return (
        <section className="pt-6 pb-20 overflow-hidden">

            <div className=" overflow-hidden rounded-t-2xl">
                <div className="px-8 pt-20">
                    <div className="md:max-w-2xl text-center mx-auto">
                        <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                            {heading ?? defaultProps.heading}
                        </span>
                        <h1 className="font-heading mb-6 text-8xl w-full lg:text-8xl text-black font-bold font-display">
                            {title ?? defaultProps.title}
                        </h1>
                        <p className="mb-8 text-xl font-bold">
                            {description ?? defaultProps.description}
                        </p>
                        <div className="flex flex-wrap justify-center mb-20 -m-2">
                            <div className="w-full md:w-auto p-2">
                                <a
                                    className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                    href="#"
                                >
                                    {cta?.name ?? defaultProps.cta.name}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative z-20 px-8 max-w-max mx-auto">
                        <img src={banner?.src ?? defaultProps.banner.src} alt="" />

                        <a
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold -50 hover:-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                            href=""
                        >
                            Latest
                        </a>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-1/2 -100">
                        <div className="h-full  rounded-b-3xl" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-1/2 -100" />
                </div>
            </div>
        </section>

    )
}