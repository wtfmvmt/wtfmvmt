const Footer = () => {

    return (
        <section className="pt-8 px-6">
            <h2 className="mb-4 text-2xl font-bold">WTFMVMT</h2>
            <div className="flex flex-wrap text-sm text-center">
                <a
                    className="inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 border-b-2 border-indigo-500 text-indigo-500"
                    href="#"
                >
                    General
                </a>
                <a
                    className="inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 text-gray-300 border-b-2 border-transparent hover:border-gray-300"
                    href="#"
                >
                    Customers
                </a>
                <a
                    className="inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 text-gray-300 border-b-2 border-transparent hover:border-gray-300"
                    href="#"
                >
                    Sales
                </a>
                <a
                    className="inline-block w-full md:w-1/2 lg:w-auto px-4 pb-2 text-gray-300 border-b-2 border-transparent hover:border-gray-300"
                    href="#"
                >
                    Returns
                </a>
            </div>
        </section>

    )
}

export default Footer