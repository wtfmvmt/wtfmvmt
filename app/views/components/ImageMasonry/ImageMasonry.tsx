import DistortionCarousel from "@components/DistortionCarousel"
import type { Image } from "@typings/Image"
import type { CallToAction } from "@typings/CallToAction"

export type Content = {
    title: string,
    heading: string,
    images: Image[]
}

export type ImageMasonryProps = {
    heading?: string,
    title?: string,
    description?: string,
    masonry?: {
        major?: Content[],
        minor?: Content[]
    },
    cta?: {
        primary: CallToAction,
        secondary: CallToAction
    }
}

const ImageMasonry = ({ heading, title, description, masonry, cta }: ImageMasonryProps) => {


    const CallToAction = () => {
        return (
            <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
                <div className="flex flex-wrap lg:justify-end">
                    <a
                        className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-6 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={cta?.primary?.url ? cta.primary.url : "#"}
                    >
                        {cta.primary ? cta.primary.name : "Primary"}
                    </a>
                    <a
                        className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={cta?.secondary?.url ? cta.secondary.url : "#"}
                    >
                        {cta.secondary ? cta.secondary.name : "Secondary"}
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


        return (
            masonry ? <div className="flex flex-wrap -mx-4 -mb-8">
                
                <div className="w-full lg:w-2/3 px-4 mb-8">
                    <div className="h-full flex flex-col border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                        <div className="mb-auto h-full">
                            <img
                                className="block h-96 lg:h-full w-full object-cover"
                                src="https://img  s.unsplash.com/photo-1563245110-4ba1be9ae814?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyMXx8YmxhY2slMjBhcnRpc3R8ZW58MHx8fHwxNjYwMzUwNjkw&ixlib=rb-1.2.1&q=80&w=1920"
                                alt=""
                            />
                            <DistortionCarousel images={[]} />
                        </div>
                        <div className="px-6 py-4 bg-indigo-900">
                            <h2 className="text-xl text-white font-extrabold">
                                Brandon J. Payne
                            </h2>
                            <span className="text-lg font-bold text-indigo-300">
                                Executive DIrector
                            </span>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/3 px-4 mb-8">
                    <div className="mb-8 border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                        <div>
                            <img
                                className="block w-full h-96 lg:h-64 object-cover"
                                src="nigodo-assets/team/photo-3.jpg"
                                alt=""
                            />
                        </div>
                        <div className="px-6 py-4 bg-indigo-900">
                            <h2 className="text-xl text-white font-extrabold">Elen Benitez</h2>
                            <span className="text-lg font-bold text-indigo-300">CPO</span>
                        </div>
                    </div>
                    <div className="border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                        <div>
                            <img
                                className="block w-full h-96 lg:h-64 object-cover"
                                src="https://img  s.unsplash.com/photo-1611432579402-7037e3e2c1e4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwzfHxibGFjayUyMHdvbWFufGVufDB8fHx8MTY2MDM1NjAwOQ&ixlib=rb-1.2.1&q=80&w=1920"
                                alt=""
                            />
                        </div>
                        <div className="px-6 py-4 bg-indigo-900">
                            <h2 className="text-xl text-white font-extrabold">Nia Ashay</h2>
                            <span className="text-lg font-bold text-indigo-300">CTO</span>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/3 px-4 mb-8">
                    <div className="mb-8 border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                        <div>
                            <img
                                className="block w-full h-96 lg:h-64 object-cover"
                                src="nigodo-assets/team/photo-1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="px-6 py-4 bg-indigo-900">
                            <h2 className="text-xl text-white font-extrabold">
                                Macauley Herring
                            </h2>
                            <span className="text-lg font-bold text-indigo-300">
                                Customer Services
                            </span>
                        </div>
                    </div>



                    <div className="border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                        <div>
                            <img
                                className="block w-full h-96 lg:h-64 object-cover"
                                src="nigodo-assets/team/photo-2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="px-6 py-4 bg-indigo-900">
                            <h2 className="text-xl text-white font-extrabold">Name</h2>
                            <span className="text-lg font-bold text-indigo-300">Role</span>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-2/3 px-4 mb-8">
                    <div className="h-full flex flex-col border-3 border-indigo-900 rounded-2xl shadow overflow-hidden">
                        <div className="mb-auto h-full">
                            <img
                                className="block h-96 lg:h-full w-full object-cover"
                                src="nigodo-assets/team/photo-3.jpg"
                                alt=""
                            />
                        </div>
                        <div className="px-6 py-4 bg-indigo-900">
                            <h2 className="text-xl text-white font-extrabold">Name</h2>
                            <span className="text-lg font-bold text-indigo-300">
                                IOS Developer
                            </span>
                        </div>
                    </div>
                </div>

            </div> : <></>
        )
    }

    return (
        <section className="py-26 relative overflow-hidden">

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

export default ImageMasonry