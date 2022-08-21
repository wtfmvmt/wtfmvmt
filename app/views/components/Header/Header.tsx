import Headroom from "react-headroom"

const Header = ({ favicon, navLinks, cta }) => {

    return (
        <section className="relative pb-24 overflow-hidden">
            <Headroom>
                <nav style={{
                    backdropFilter: 'blur(5px) saturate(140%)',
                }} className="flex mb-20 justify-between items-center py-6 px-10 relative text-white">
                    <a className="text-lg font-bold" href={favicon.href}>
                        <img
                            className="h-14"
                            src={favicon.src}
                            alt=""
                            width="auto"
                        />
                    </a>
                    <div className="xl:hidden">
                        <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800">
                            <svg
                                className="block h-6 w-6"
                                fill="white"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {
                            navLinks.map((navLink, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-purple-800 text-white"
                                            href={navLink.href}
                                        >
                                            {navLink.name}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className="hidden xl:flex items-center">
                        <a
                            className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                            href={cta.href}
                        >
                           {cta.name}
                        </a>
                    </div>
                </nav>
            </Headroom>
        </section>
    )
}

export default Header