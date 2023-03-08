export default function DrawerMenu({ }) {
    return (
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0  opacity-80" />
        <nav className="relative z-10 px-9 pt-8  h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                        <div className="w-auto p-2">
                            <a className="inline-block" href="#">
                                <img src="zanrly-assets/logos/zanrly-logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="w-auto p-2">
                            <a className="inline-block navbar-burger" href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 18L18 6M6 6L18 18"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center py-8 w-full">
                    <ul>
                        <li className="mb-9">
                            <a
                                className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                                href="#"
                            >
                                Features
                            </a>
                        </li>
                        <li className="mb-9">
                            <a
                                className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                                href="#"
                            >
                                Solutions
                            </a>
                        </li>
                        <li className="mb-9">
                            <a
                                className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                                href="#"
                            >
                                Resources
                            </a>
                        </li>
                        <li>
                            <a
                                className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                                href="#"
                            >
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                    <div className="flex flex-wrap -m-2">
                        <div className="w-full p-2">
                            <a
                                className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold  hover:-50 focus:ring-4 focus:ring-gray-200 border rounded-full"
                                href="#"
                            >
                                Log In
                            </a>
                        </div>
                        <div className="w-full p-2">
                            <a
                                className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}