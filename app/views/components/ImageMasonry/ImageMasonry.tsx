import type { ImageMasonryProps } from "@typings/ImageMasonry";
import type { ComponentType } from "@typings/Component"
import LazyImage from 'react-lazy-blur-image';
import { SocialIcon } from "react-social-icons";
import Ripples from 'react-ripples'



const ImageMasonry: ComponentType<ImageMasonryProps> = ({ heading, title, description, masonry }: ImageMasonryProps) => {

    const Header = () => {

        return (
            heading ? <div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0 text-slate-200">
                <span className="text-lg font-extrabold font-share_tech text-blue-400">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3 font-major">
                    {title ? title : "TITLE_NOT_FOUND"}
                </h1>
                <p className="text-xl font-extrabold leading-8 font-share_tech">
                    {description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem."}
                </p>
            </div> : <>HEADING_NOT_FOUND</>
        )
    }


    const Masonry = () => {

        return (
            masonry ?
                <div className="mr-10 grid grid-cols-1 lg:grid-cols-2 items-center justify-center m-auto w-full">

                    {
                        masonry.map((major, index) => {

                            const { image, title, heading } = major

                            return (

                                <div key={index} className="cursor-pointer hover:-translate-y-4 duration-500 ease-in-out transition-all w-full lg:w-2/3 px-4 mb-8 m-auto group rounded">

                                    <Ripples color="purple" during={1500}>

                                        <a href={major?.url}>

                                            <div className="h-full flex flex-col border-3 border-purple-900 rounded-2xl shadow-2xl overflow-hidden w-full group-hover:opacity-70 duration-500 ease-in-out">
                                                <div className="mb-auto h-full w-full">
                                                    <div className="block min-h-full m-auto lg:h-full" >
                                                        <LazyImage
                                                            placeholder={'http://example.com/placeholder.png'}
                                                            uri={image?.src}
                                                            render={(src, style) => <img style={style} className="object-fit h-full" src={src ?? "IMAGE_NOT_FOUND"} alt={image?.alt ?? "IMAGE_ALT_NOT_FOUND"} />}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="px-6 py-4 items-center text-center bg-opacity-90 z-50 font-major">
                                                    <h2 className="text-xl text-white font-extrabold">
                                                        {title ? title : "TITLE_NOT_FOUND"}
                                                    </h2>
                                                    <div className="flex justify-around align-baseline shadow-2xl">
                                                        <span className="text-lg font-bold text-indigo-300 font-share_tech">
                                                            {heading ? heading : "HEADING_NOT_FOUND"}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        </a>

                                    </Ripples>

                                </div>
                            )
                        })

                    }


                </div> : <>MASONRY_NOT_FOUND</>
        )
    }

    return (

        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative">
                <div className="flex flex-wrap -mx-4 mb-16 items-center justify-between">
                    <Header />
                </div>
                <Masonry />
            </div>
        </section>
    )
}

export default ImageMasonry