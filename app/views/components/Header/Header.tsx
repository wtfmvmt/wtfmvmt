const Header = () => {

    return (
        <section className="relative pb-24 overflow-hidden">
            <div className="absolute top-0 right-0 flex w-full h-3/4 md:h-2/3 bg-purple-300 bg-purple-600">
                <img
                    className="w-64 md:w-80 2xl:w-auto self-start"
                    src="nigodo-assets/background-elements/pattern-dots-orange-left.svg"
                    alt=""
                />
                <img
                    className="w-64 md:w-80 2xl:w-auto self-end ml-auto"
                    src="nigodo-assets/background-elements/pattern-dots-orange-right.svg"
                    alt=""
                />
                <img
                    className="absolute bottom-0 transform translate-y-1/2"
                    src="nigodo-assets/background-elements/pattern-horizontal-orange.svg"
                    alt=""
                />
            </div>
            <nav className="flex mb-20 justify-between items-center py-6 px-10 relative text-white">
                <a className="text-lg font-bold" href="#">
                    <img
                        className="h-32"
                        src="https://static.shuffle.dev/uploads/files/c5/c588f2e6e97dec56040c09794a6a944110e98d9d/Untitled-design.png"
                        alt=""
                        width="auto"
                    />
                </a>
                <div className="xl:hidden">
                    <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800">
                        <svg
                            className="block h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <li>
                        <a
                            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800 text-white"
                            href="#"
                        >
                            Vision
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
                            href="#"
                        >
                            Community
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800"
                            href="#"
                        >
                            Events
                        </a>
                    </li>
                    <li>
                        <a className="text-lg font-extrabold hover:text-indigo-800" href="#">
                            Projects
                        </a>
                    </li>
                </ul>
                <div className="hidden xl:flex items-center">
                    <a
                        className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href="#"
                    >
                        Connect with Us
                    </a>
                </div>
            </nav>
            <div className="container px-4 mx-auto relative">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-xl md:text-2xl font-extrabold text-orange-500 text-blue-200">
                        Circa 2020
                    </span>
                    <h1 className="max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6 text-white shadow-2xl">
                        WeTheFuture is a community of artists, builders and thinkers focused on
                        building a better future
                    </h1>
                    <p className="text-xl md:text-2xl font-extrabold leading-8 mb-12 text-purple-200">
                        We are the Futures {"{"}Builders | Artist | Engineers | Providers{"}"}
                    </p>
                    <div className="flex flex-wrap mb-20 justify-center">
                        <a
                            className="inline-block w-full md:w-auto mb-2 md:mb-0 md:mr-4 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 shadow rounded transition duration-200 border-blue-800"
                            href="#"
                        >
                            RSVP for Latest Event
                        </a>
                    </div>
                    <img
                        className="block w-full h-128 lg:h-140 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
                        src="https://images.unsplash.com/photo-1591197172062-c718f82aba20?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHw2fHxjb21tdW5pdHl8ZW58MHx8fHwxNjYwMzUzNTk2&ixlib=rb-1.2.1&q=80&w=1920"
                        alt=""
                    />
                </div>
            </div>
            <div className="hidden navbar-menu relative z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-2xl font-bold leading-none" href="#">
                            <img
                                className="h-6"
                                src="nigodo-assets/logo-nigodo.svg"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <button className="navbar-close">
                            <svg
                                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="my-auto">
                        <ul className="py-10">
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                                    href="#"
                                >
                                    Product
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                                    href="#"
                                >
                                    Features
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                                    href="#"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                                    href="#"
                                >
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a
                            className="block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800"
                            href="#"
                        >
                            Log In
                        </a>
                        <a
                            className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                            href="#"
                        >
                            Sign Up
                        </a>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header