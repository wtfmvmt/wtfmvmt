const DrawerMenu = ({ isOpen=true }) => {

    return (
        <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0  opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 border-r overflow-y-auto">
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
    )
}

export default DrawerMenu