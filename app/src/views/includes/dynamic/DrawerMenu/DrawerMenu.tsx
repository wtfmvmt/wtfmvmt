export default function DrawerMenu({ }) {
    return (
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
            <nav className="relative flex flex-col pt-12 pb-40 h-full w-full bg-gray-200 overflow-y-auto">
                <div className="px-12">
                    <div>
                        <a className="inline-block mb-52" href="#">
                            <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
                        </a>
                        <button type="button" aria-label="Close" />
                    </div>
                    <ul>
                        <li className="mb-6">
                            <a className="flex items-center justify-between" href="#">
                                <span>Collection</span>
                                <svg
                                    width={12}
                                    height={7}
                                    viewBox="0 0 12 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 2L6 6L2 2"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="mb-6">
                            <a className="inline-block" href="#">
                                Projects
                            </a>
                        </li>
                        <li className="mb-16">
                            <a className="inline-block" href="#">
                                About
                            </a>
                        </li>
                        <li className="mb-6">
                            <a className="inline-block" href="#">
                                How to Start
                            </a>
                        </li>
                        <li>
                            <a className="inline-block" href="#">
                                Design
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="absolute bottom-0 left-0 w-full">
                <a className="flex items-center pt-4 pb-5 pl-6 pr-4 bg-white" href="#">
                    <div className="relative mr-4">
                        <img
                            className="w-12 h-12 rounded-full"
                            src="wrexa-assets/images/avatar2.png"
                            alt=""
                        />
                        <div className="absolute bottom-0 left-0 -ml-2 flex items-center justify-center w-6 h-6 bg-green-800 rounded-full text-white text-xs">
                            1
                        </div>
                    </div>
                    <div className="pr-5 mr-auto">
                        <h4 className="text-xs text-gray-400">Account</h4>
                        <span>matloay</span>
                    </div>
                    <svg
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2L6 6L2 2"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}