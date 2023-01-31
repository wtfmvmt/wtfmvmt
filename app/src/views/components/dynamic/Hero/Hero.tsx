export default function Hero({ }) {
    return (
        <section className="pb-40 z-0">
            <div className="pb-5 relative z-0">
                <div className="absolute bottom-0 left-0 h-5 w-1/2 bg-white" />
                <div className="hidden sm:block absolute bottom-0 right-0 h-26 w-26 bg-white">
                    <div className="absolute bottom-0 left-1/2 mb-8 transform translate-x-1/2">
                        <div className="h-26 w-px bg-white" />
                        <div className="h-18 w-px bg-gray-800" />
                    </div>
                </div>
                <div className="sm:mr-26 relative">
                    <img
                        className="absolute top-0 left-0 w-full h-full block object-cover"
                        src="/assets/images/download.png"
                        alt=""
                    />
                    <div className="container px-4 mx-auto relative">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/2 px-4 self-end order-last lg:order-first">
                                <div className="max-w-md mb-12 relative">
                                    <div className="absolute top-0 right-0 -mt-8 mr-8 flex items-center justify-center w-24 h-24 bg-white rounded-full">
                                        <img
                                            className="block w-20 h-20 rounded-full"
                                            src="wrexa-assets/images/avatar.png"
                                            alt=""
                                        />
                                        <a
                                            className="absolute bottom-0 right-0 -mr-2 -mb-2 inline-flex items-center justify-center w-12 h-12 bg-green-800 hover:bg-green-900 text-white rounded-full"
                                            href="#"
                                        >
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x={4} width="2.4" height="10.4" rx={1} fill="white" />
                                                <rect
                                                    x={10}
                                                    y={4}
                                                    width="2.4"
                                                    height="9.6"
                                                    rx={1}
                                                    transform="rotate(90 10 4)"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="py-14 px-6 sm:px-8 bg-indigo-500 bg-opacity-90 rounded-2xl">
                                        <h3 className="text-2xl sm:text-3xl text-white mb-8">
                                            Hello again*
                                        </h3>
                                        <form className="mb-8" action="#" method="post">
                                            <div className="relative flex items-center pl-4 sm:pl-14 pt-3 pb-2 bg-white rounded-full">
                                                <input
                                                    className="w-32 md:w-40 block mt-2 bg-transparent outline-none"
                                                    type="email"
                                                    placeholder="mat@hello.dev"
                                                    defaultValue=""
                                                />
                                                <label
                                                    className="absolute top-0 left-0 ml-4 sm:ml-14 mt-3 text-xs font-normal text-gray-400"
                                                    htmlFor=""
                                                >
                                                    Your email
                                                </label>
                                                <a
                                                    className="inline-flex items-center py-2 px-4 ml-auto mr-2 text-sm sm:text-lg font-medium bg-white hover:bg-gray-100 shadow rounded-full"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="hidden sm:block h-4 w-4 sm:w-8 sm:h-8 mr-3"
                                                        width={34}
                                                        height={34}
                                                        viewBox="0 0 34 34"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx={17}
                                                            cy={17}
                                                            r="15.75"
                                                            fill="white"
                                                            stroke="#DDDEE1"
                                                            strokeWidth="2.5"
                                                        />
                                                        <path
                                                            d="M22.8898 14.1751L21.8252 13.1105C21.7903 13.0755 21.7488 13.0477 21.7031 13.0287C21.6575 13.0098 21.6085 13 21.5591 13C21.5096 13 21.4607 13.0098 21.415 13.0287C21.3693 13.0477 21.3279 13.0755 21.293 13.1105L15.8496 18.8567L12.7295 15.7354C12.658 15.6639 12.561 15.6238 12.4599 15.6238C12.3588 15.6238 12.2618 15.6639 12.1903 15.7354L11.1117 16.8148C11.0402 16.8863 11 16.9833 11 17.0844C11 17.1855 11.0402 17.2825 11.1117 17.354L15.5492 21.8943C15.5902 21.9345 15.6399 21.9645 15.6946 21.9821C15.7492 21.9997 15.8071 22.0043 15.8639 21.9956C15.9223 22.0057 15.9822 22.0018 16.0388 21.9842C16.0954 21.9666 16.147 21.9358 16.1893 21.8943L22.8898 14.7076C22.9604 14.637 23.0001 14.5412 23.0001 14.4413C23.0001 14.3415 22.9604 14.2457 22.8898 14.1751V14.1751Z"
                                                            fill="#D6D7DA"
                                                        />
                                                    </svg>
                                                    <span>Accept</span>
                                                </a>
                                            </div>
                                        </form>
                                        <div className="flex flex-wrap sm:justify-center -mx-2">
                                            <div className="w-auto pb-4 sm:pb-0 px-2">
                                                <h5 className="text-xs font-medium text-indigo-200 mb-1">
                                                    Save 10% with code
                                                </h5>
                                                <span className="text-2xl font-medium text-white">
                                                    OXH20
                                                </span>
                                            </div>
                                            <div className="h-px w-full sm:w-px sm:mx-12 sm:h-18 bg-indigo-300" />
                                            <div className="w-auto pt-4 sm:pt-0 px-2">
                                                <h5 className="text-xs font-medium text-indigo-200 mb-1">
                                                    Valid through
                                                </h5>
                                                <span className="text-2xl font-medium text-white">
                                                    5 Feb
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-xl py-24 md:pt-52 lg:pb-72">
                                    <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl text-white mb-16">
                                        Find your editor and create your home.
                                    </h1>
                                    <a
                                        className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                        href="#"
                                    >
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

