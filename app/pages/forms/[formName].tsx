import RootLayout from "@layouts/RootLayout"



const IndexFormsPage = () => {

    return (
        <RootLayout metaData={{ pageTitle: 'Forms ' }}>
          <section className="py-20 overflow-x-hidden">
                <div className="relative container px-4 mx-auto">
                    <div className="absolute inset-0 bg-opacity-80 my-24 -ml-4" />
                    <div className="relative flex flex-wrap">
                        <div className="w-full md:w-4/6 px-4">
                            <div className="lg:max-w-3xl mx-auto py-20 px-4 md:px-10 lg:px-20">
                                <a
                                    className="inline-block mb-14 text-3xl font-bold font-heading"
                                    href="#"
                                >
                                    <img
                                        className="h-9"
                                        src="yofte-assets/logos/yofte-logo.svg"
                                        alt=""
                                        width="auto"
                                    />
                                </a>
                                <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">
                                    Signing up with social is super quick
                                </h3>
                                <p className="mb-10 font-semibold font-heading">
                                    Please, do not hesitate
                                </p>
                                <form className="flex flex-wrap -mx-4" action="">
                                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-12">
                                        <label >
                                            <h4 className="mb-5 text-gray-400 uppercase font-bold font-heading">
                                                Your Email
                                            </h4>
                                            <input
                                                className="p-5 w-full border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="email"
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4 mb-12">
                                        <label >
                                            <h4 className="mb-5 text-gray-400 uppercase font-bold font-heading">
                                                Password
                                            </h4>
                                            <input
                                                className="p-5 w-full border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="password"
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4 mb-12">
                                        <label >
                                            <h4 className="mb-5 text-gray-400 uppercase font-bold font-heading">
                                                Password
                                            </h4>
                                            <input
                                                className="p-5 w-full border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="password"
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4 mb-12">
                                        <label >
                                            <h4 className="mb-5 text-gray-400 uppercase font-bold font-heading">
                                                Password
                                            </h4>
                                            <input
                                                className="p-5 w-full border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="password"
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4 mb-12">
                                        <label >
                                            <h4 className="mb-5 text-gray-400 uppercase font-bold font-heading">
                                                Password
                                            </h4>
                                            <input
                                                className="p-5 w-full border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="password"
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full px-4 mb-12" >
                                        <label className="flex" >
                                            <input className="mr-4 mt-1" type="checkbox" />
                                            <span className="text-sm">
                                                By singning up, you agree to our Terms, Data Policy and
                                                Cookies.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="w-full px-4">
                                        <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                                            JOIN yofte
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-2/6 h-128 md:h-auto flex items-center lg:items-end px-4 pb-20 bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: 'url("yofte-assets/images/placeholder-sign2.png")'
                            }}
                        >
                            <div>
                                <div className="inline-flex items-center mb-2 px-6 py-3 bg-white rounded-full">
                                    <span className="mr-6">
                                        <svg
                                            width={36}
                                            height={36}
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={18} cy={18} r={18} fill="#A692FF" />
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M15.135 24.3373L9 18.2023L9.81024 17.392L15.135 22.7168L26.1898 11.6621L27 12.4724L15.135 24.3373Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width={18}
                                                        height={18}
                                                        fill="white"
                                                        transform="translate(9 9)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p>A sagittis eleifend</p>
                                </div>
                                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full">
                                    <span className="mr-6">
                                        <svg
                                            width={36}
                                            height={36}
                                            viewBox="0 0 36 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={18} cy={18} r={18} fill="#A692FF" />
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M15.135 24.3373L9 18.2023L9.81024 17.392L15.135 22.7168L26.1898 11.6621L27 12.4724L15.135 24.3373Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width={18}
                                                        height={18}
                                                        fill="white"
                                                        transform="translate(9 9)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p>Molestie felis, a aliquam torto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </RootLayout>

    )
}

export default IndexFormsPage