import type { CallToAction } from "@typings/CallToAction"


export type Table = {
    title: string,
    description?: string,
    cta: {
        primary: CallToAction,
        secondary: CallToAction
    },
    features: []
}


export type StatsSectionProps = {
    heading?: string,
    title?: string,
    description?: string,
    tables?: Table[]
}

const StatsSection = ({ heading, title, description, tables }: StatsSectionProps) => {

    const Header = () => {
        return (
            <div className="text-center mb-16">
                <span className="text-lg font-extrabold text-indigo-500">
                    {heading ? heading : "Heading"}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
                    {title ? title : "Title"}
                </h1>
                <p className="text-xl font-extrabold leading-8">
                    {description ? description : "Description"}
                </p>
            </div>
        )
    }


    const Tables = () => {

        return (

            tables ? <div className="flex flex-wrap -mx-4">

                {
                    tables.map((table, index) => {
                        return (

                            <div key={index} className="hover:scale-90 transition-all w-full  rounded lg:w-1/3 px-4 mb-12 lg:mb-0">


                                <div className="max-w-md mx-auto border-3 border-black bg-purple-900 bg-opacity-40 rounded-2xl shadow-md">
                                    <div className="px-6 pt-12 lg:px-12 pb-10 border-b-3 border-indigo-900">
                                        <h2 className="text-2xl font-extrabold mb-6">{table?.title}</h2>
                                        <div className="flex items-start mb-6">
                                            <span className="pr-1 text-lg font-extrabold">$</span>
                                            <span className="text-4xl sm:text-5xl font-extrabold">10</span>
                                            <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
                                        </div>
                                        <p className="text-lg font-extrabold leading-7 mb-8">
                                            {description ? description : "Description"}
                                        </p>
                                        <a
                                            className="inline-block w-full py-4 px-6 mb-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                                            href="#"
                                        >
                                            Get Started
                                        </a>
                                        <a
                                            className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                                            href="#"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                    <div className="p-6 lg:px-12 pt-10 pb-12">
                                        <div className="flex mb-4 items-start">
                                            <img
                                                className="block w-6 h-6 mr-2 object-contain"
                                                src="nigodo-assets/circle-icon-green.svg"
                                                alt=""
                                            />
                                            <span className="text-lg font-extrabold">
                                                Mauris pellentesque congue libero nec
                                            </span>
                                        </div>
                                        <div className="flex mb-4 items-start">
                                            <img
                                                className="block w-6 h-6 mr-2 object-contain"
                                                src="nigodo-assets/circle-icon-green.svg"
                                                alt=""
                                            />
                                            <span className="text-lg font-extrabold">
                                                Suspendisse mollis tincidunt
                                            </span>
                                        </div>
                                        <div className="flex mb-4 items-start">
                                            <img
                                                className="block w-6 h-6 mr-2 object-contain"
                                                src="nigodo-assets/circle-icon-green.svg"
                                                alt=""
                                            />
                                            <span className="text-lg font-extrabold">
                                                Praesent varius justo vel justo pulvinar
                                            </span>
                                        </div>
                                        <div className="flex items-start">
                                            <img
                                                className="block w-6 h-6 mr-2 object-contain"
                                                src="nigodo-assets/circle-icon-green.svg"
                                                alt=""
                                            />
                                            <span className="text-lg font-extrabold">
                                                Mauris pellentesque congue libero nec
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div> : <></>
        )
    }


    return (

        <section className="bg-black bg-opacity-10 py-26">
            <div className="container px-4 mx-auto">
                <Header />
                <Tables />
            </div>
        </section>
    )
}

export default StatsSection