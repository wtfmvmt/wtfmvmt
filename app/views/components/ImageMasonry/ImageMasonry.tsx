import type { ImageMasonryProps } from "@typings/ImageMasonry";
import type { ComponentType } from "@typings/Component"
import LazyImage from 'react-lazy-blur-image';
import { SocialIcon } from "react-social-icons";
import Ripples from 'react-ripples'



const ImageMasonry: ComponentType<ImageMasonryProps> = ({ heading, title, description, masonry }: ImageMasonryProps) => {

    const Header = () => {

        return (
            heading ? <div className="w-full px-4 mb-8 lg:w-1/2 xl:w-2/3 lg:mb-0 text-slate-200">
                <span className="text-lg font-extrabold text-blue-400 font-share_tech">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </span>
                <h1 className="mt-3 mb-3 text-3xl font-extrabold md:text-4xl font-heading font-major">
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
                <div className="grid items-center justify-center w-full grid-cols-1 m-auto mr-10 lg:grid-cols-2">

                    {
                        masonry.map((major, index) => {

                            const { image, title, heading } = major

                            return (

                                <div key={index} className="w-full px-4 m-auto mb-8 transition-all duration-500 ease-in-out rounded cursor-pointer hover:-translate-y-4 lg:w-2/3 group">

                                    <Ripples color="purple" during={1000}>

                                        <a href={major?.url}>

                                            <div className="flex flex-col w-full h-full overflow-hidden duration-500 ease-in-out border-purple-900 shadow-2xl border-3 rounded-2xl group-hover:opacity-70">
                                                <div className="w-full h-full mb-auto">
                                                    <div className="block min-h-full m-auto lg:h-full" >
                                                        <LazyImage
                                                            placeholder={'http://example.com/placeholder.png'}
                                                            uri={image?.src}
                                                            render={(src, style) => <img style={style} className="h-full object-fit" src={src ?? "IMAGE_NOT_FOUND"} alt={image?.alt ?? "IMAGE_ALT_NOT_FOUND"} />}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="z-50 items-center px-6 py-4 text-center bg-opacity-90 font-major">
                                                    <h2 className="text-xl font-extrabold text-white">
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

        <section className="relative py-24 overflow-hidden">
            <div className="container relative px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between mb-16 -mx-4">
                    <Header />
                </div>
                <Masonry />
            </div>
        </section>
    )
}

export default ImageMasonry