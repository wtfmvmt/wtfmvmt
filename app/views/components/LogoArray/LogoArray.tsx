const LogoArray = () => {

    return (
        <section className="py-26">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
                        <span className="text-lg font-extrabold text-orange-500">
                            Our Clients
                        </span>
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mt-2 mb-10">
                            Trusted by the top companies in this industry
                        </h1>
                        <p className="text-xl font-extrabold leading-8">
                            The only SaaS business platform that combines CRM, marketing
                            automation &amp; commerce.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-8">
                                <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                                    <img src="nigodo-assets/logo-clouds/microsoft.svg" alt="" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-8">
                                <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                                    <img src="nigodo-assets/logo-clouds/google.svg" alt="" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                                <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                                    <img src="nigodo-assets/logo-clouds/spotify.svg" alt="" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                                    <img src="nigodo-assets/logo-clouds/slack.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LogoArray