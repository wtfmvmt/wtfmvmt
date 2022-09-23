import DistortionCarousel from "@components/DistortionCarousel"
import type { CallToAction } from "@typings/CallToAction"

export type Content = {
    title: string,
    heading: string,
    key?: any,
    images: string[]
}

export type Masonry = {
    minor?: Content[],
    major?: Content[],
}

export type ImageMasonryProps = {
    heading?: string,
    title?: string,
    description?: string,
    masonry?: Masonry,
    cta?: {
        primary: CallToAction,
        secondary: CallToAction
    }
}

const $ImageMasonry = ({ heading, title, description, masonry, cta }: ImageMasonryProps) => {

    const PropsObject: ImageMasonryProps = {
        heading: heading ? heading : "HEADING_PROPERTY_NOT_FOUND",
        title: title ? title : "TITLE_PROPERTY_NOT_FOUND",
        description: description ? description : "DESCRIPTION_PROPERTY_NOT_FOUND",
        masonry: masonry ? masonry : {
            minor: [{
                title: "MINOR_PROPERTY_NOT_FOUND",
                heading: "MINOR_PROPERTY_NOT_FOUND",
                images: ["MINOR_PROPERTY_NOT_FOUND"]
            }],
            major: [{
                title: "MAJOR_PROPERTY_NOT_FOUND",
                heading: "MAJOR_PROPERTY_NOT_FOUND",
                images: ["MAJOR_PROPERTY_NOT_FOUND"]
            }]
        },

    }

    return PropsObject
}


const ImageMasonry = ({ heading, title, description, masonry, cta }: ImageMasonryProps) => {


    const CallToAction = () => {
        return (
            <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
                <div className="flex flex-wrap lg:justify-end">
                    <a
                        className="inline-block w-full md:w-auto mb-6 md:mb-0 md:mr-6 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={cta?.primary?.url ? cta?.primary.url : "#"}
                    >
                        {cta?.primary ? cta?.primary?.name : "Primary"}
                    </a>
                    <a
                        className="mt-4 inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={cta?.secondary?.url ? cta?.secondary?.url : "#"}
                    >
                        {cta?.secondary ? cta?.secondary?.name : "Secondary"}
                    </a>
                </div>
            </div>
        )

    }

    const Header = () => {

        return (
            heading ? <div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0">
                <span className="text-lg font-extrabold text-orange-500">
                    {heading ? heading : "Heading"}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">
                    {title ? title : "Image Masonry"}
                </h1>
                <p className="text-xl font-extrabold leading-8">
                    {description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem."}
                </p>
            </div> : <></>
        )
    }

    const Masonry = () => {


        const Minor = ({ key, title, heading, images }: Content) => {
            return (

                <div key={key ? key : 0} className="hover:scale-90 transition-all border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                    <div>
                        <div className="block h-96 lg:h-full w-full object-cover" >
                            <img src={images[0]} />
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-indigo-900">
                        <h2 className="text-xl text-white font-extrabold">{title ? title : "Brandon J Payne"}</h2>
                        <span className="text-lg font-bold text-indigo-300">{heading ? heading : "CEO"}</span>
                    </div>
                </div>

            )
        }

        const Major = ({ key, title, heading, images }: Content) => {
            return (
                <div key={key ? key : 0} className="hover:scale-90 transition-all w-full lg:w-2/3 px-4 mb-8">
                    <div className="h-full flex flex-col border-3 border-purple-900 rounded-2xl shadow-xl overflow-hidden">
                        <div className="mb-auto h-full">
                            <div className="block h-96 lg:h-full w-full object-cover" >
                                <DistortionCarousel images={images} />
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-purple-900 bg-opacity-90">
                            <h2 className="text-xl text-white font-extrabold">
                                {title ? title : "Nia Ashay"}
                            </h2>
                            <span className="text-lg font-bold text-indigo-300">
                                {heading ? heading : "CTO"}
                            </span>
                        </div>
                    </div>
                </div>
            )
        }


        return (
            masonry ? <div className="flex flex-wrap -mx-4 -mb-8">

                {
                    masonry.major ? masonry.major.map((major, index) => {
                        return (
                            <Major {...major} key={index} />
                        )
                    }) : <></>

                }

                <div className="w-full lg:w-1/3 px-4 mb-8">



                    {
                        masonry.minor ? masonry.minor.map((minor, index) => {
                            return (
                                <Minor {...minor} key={index} />
                            )
                        }) : <></>

                    }


                </div>

            </div> : <></>
        )
    }

    return (

        <section className="py-26 relative overflow-hidden bg-black bg-opacity-10">
            <div className="container px-4 mx-auto relative">
                <div className="flex flex-wrap -mx-4 mb-16 items-center justify-between">
                    <Header />
                    <CallToAction />
                </div>
                <Masonry />
            </div>
        </section>
    )
}

export { $ImageMasonry }
export default ImageMasonry