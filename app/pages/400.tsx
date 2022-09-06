const Custom400Error = () => {

    return (
        <section className="overflow-x-hidden">
            <div className="py-10">
                <div className="container mx-auto px-4">
                    <a className="text-3xl font-bold font-heading" href="#">
                        <img
                            className="h-9"
                            src="yofte-assets/logos/yofte-logo.svg"
                            alt=""
                            width="auto"
                        />
                    </a>
                </div>
            </div>
            <div
                className="relative py-20 md:pt-32 md:pb-32 bg-blue-800"
                style={{
                    backgroundImage: 'url("yofte-assets/elements/lines-color4.svg")',
                    backgroundSize: "cover"
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <img
                            className="mb-4 w-full max-w-xl mx-auto"
                            src="yofte-assets/elements/404-header-fix.png"
                            alt=""
                        />
                        <h3 className="mb-20 text-xl font-bold font-heading text-white">
                            Sorry, we can’t find that page or something has gone wrong
                        </h3>
                        <div className="flex flex-wrap items-center justify-center">
                            <p className="mb-12 md:mb-0 text-white">
                                Checkout for any URL misspelling.
                            </p>
                            <a
                                className="md:ml-12 inline-block w-full md:w-auto text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                                href="#"
                            >
                                Homepage
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Custom400Error