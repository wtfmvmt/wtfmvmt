import type { ImageMasonryProps } from "@typings/ImageMasonry";
import type { ComponentType } from "@typings/Component"

const ImageMasonry: ComponentType<ImageMasonryProps> = ({ heading, title, description, masonry }: ImageMasonryProps) => {

    const Header = () => {

        return (
            heading ? <div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0">
                <span className="text-lg font-extrabold text-orange-500">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">
                    {title ? title : "TITLE_NOT_FOUND"}
                </h1>
                <p className="text-xl font-extrabold leading-8">
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
                                <div key={index} className="cursor-pointer hover:-translate-y-4 duration-500 ease-in-out transition-all w-full lg:w-2/3 px-4 mb-8 m-auto">
                                    <div className="h-full flex flex-col border-3 border-purple-900 rounded-2xl shadow-2xl overflow-hidden w-full">
                                        <div className="mb-auto h-full w-full">
                                            <div className="block h-64 m-auto lg:h-full" >
                                                <img className="object-fit" loading="lazy" src={image?.src ?? "IMAGE_NOT_FOUND"} alt={image?.alt ?? "IMAGE_ALT_NOT_FOUND"} />
                                            </div>
                                        </div>
                                        <div className="px-6 py-4  bg-opacity-90">
                                            <h2 className="text-xl text-white font-extrabold">
                                                {title ? title : "TITLE_NOT_FOUND"}
                                            </h2>
                                            <span className="text-lg font-bold text-indigo-300">
                                                {heading ? heading : "HEADING_NOT_FOUND"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }


                </div> : <></>
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