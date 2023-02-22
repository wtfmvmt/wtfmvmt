export const defaultProps = {
    favicon: {
        image: {
            src: "",
            alt: ""
        }
    },
    links: [
        {
            name: "Events",
            url: "#events"
        },
        {
            name: "Memberships",
            url: "#memberships"
        },
        {
            name: "Partners",
            url: "#partners"
        },
        {
            name: "About",
            url: "#about"
        },
        {
            name: "Contact",
            url: "#contact"
        }
    ]
}
export default function Header({ links, favicon }) {
    return (
        <section className="py-6 fixed w-full">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between px-6 py-3.5 bg-black bg-opacity-50 backdrop-blur-lg rounded-full">
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto">
                                <a href="#">
                                    <img src={favicon?.image?.src ?? defaultProps.favicon.image.src}
                                        alt={favicon?.image?.alt ?? defaultProps.favicon.image.alt} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto hidden lg:block">
                                <ul className="flex items-center justify-center">
                                    {
                                        links ?
                                            links.map((link) => (
                                                <li className="mr-9">
                                                    <a
                                                        className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                                        href="#"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </li>
                                            )) :
                                            defaultProps.links.map((link) => (
                                                <li className="mr-9">
                                                    <a
                                                        className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                                        href="#"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </li>
                                            ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto hidden lg:block">
                                <div className="flex flex-wrap -m-2">
                                    <div className="w-full md:w-auto p-2">
                                        <a
                                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 border border-gray-800 rounded-full"
                                            href="#"
                                        >
                                            Log In
                                        </a>
                                    </div>
                                    <div className="w-full md:w-auto p-2">
                                        <a
                                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                            href="#"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto lg:hidden">
                                <a className="inline-block" href="#">
                                    <svg
                                        className="navbar-burger text-blue-500"
                                        width={45}
                                        height={45}
                                        viewBox="0 0 56 56"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width={56} height={56} rx={28} fill="currentColor" />
                                        <path
                                            d="M37 32H19M37 24H19"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
                    <nav className="relative z-10 px-9 pt-8 bg-gray-800 h-full overflow-y-auto">
                        <div className="flex flex-wrap justify-between h-full">
                            <div className="w-full">
                                <div className="flex items-center justify-between -m-2">
                                    <div className="w-auto p-2">
                                        <a className="inline-block" href="#">
                                            <img src="zanrly-assets/logos/zanrly-logo-white.svg" alt="" />
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
                                                    stroke="#ffffff"
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
                                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                            href="#"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li className="mb-9">
                                        <a
                                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                            href="#"
                                        >
                                            Solutions
                                        </a>
                                    </li>
                                    <li className="mb-9">
                                        <a
                                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                            href="#"
                                        >
                                            Resources
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
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
                                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 border border-gray-700 rounded-full"
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
            </div>
        </section>

    )
}