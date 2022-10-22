import type { ImageMasonryProps, ContentProps } from '@typings/ImageMasonry';

const ImageMasonry = ({ heading, title, description, masonry }: ImageMasonryProps) => {




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
            </div> : <>HEADING_NOT_FOUND</>
        )
    }


    const Masonry = () => {
        const Content = ({ key, title, heading, image }: ContentProps) => {
            return (
                <div key={key ? key : 0} className="cursor-pointer hover:translate-y-4 duration-500 ease-in-out  transition-all w-full lg:w-2/3 px-4 mb-8">
                    <div className="h-full flex flex-col border-3 border-purple-900 rounded-2xl shadow-xl overflow-hidden">
                        <div className="mb-auto h-full">
                            <div className="block h-96 lg:h-full w-full object-cover" >
                                <img src={image?.src} alt={image?.alt ?? "ALT_NOT_FOUND"} />
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
        }


        return (
            masonry ? <div className="flex flex-wrap m-auto w-full justify-center items-center">

                {
                    masonry ? masonry.map((major, index) => {
                        return (
                            <Content {...major} key={index} />
                        )
                    }) : <></>

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