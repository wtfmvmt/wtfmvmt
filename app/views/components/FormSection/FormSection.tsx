import Countdown from "@views/components/Countdown";
import ReactTypingEffect from 'react-typing-effect';

const FormSection = ({ label, heading, description, submit }) => {

    return (
        <section className="pb-10">

            <div className="py-16 md:py-24 lg:pt-40 lg:pb-52 px-2 md:px-6 mx-4 md:mx-10  border-3 border-indigo-900 shadow-md rounded-2xl">
                <div className="container px-4 mx-auto relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-xl md:text-2xl font-extrabold text-orange-500">
                            {label}
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold font-heading mt-1 mb-8">
                            {heading}
                        </h1>
                        <p className="text-xl md:text-2xl font-extrabold leading-8 mb-8">
                            <ReactTypingEffect  speed={300} eraseSpeed={10} typingDelay={20} text={description} />
                        </p>
                        <p className="text-xl md:text-2xl font-extrabold leading-8 mb-8">
                            <Countdown date={'2022-09-01T01:09:00'} />
                        </p>
                        <div className="max-w-2xl mx-auto">
                            <div className="flex flex-wrap -mx-2 mb-4 justify-center">
                                <div className="w-full md:w-auto lg:w-2/3 px-2 mb-2 md:mb-0">
                                    <input
                                        className="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none"
                                        type="email"
                                        placeholder="hello@shuffle.dev"
                                    />
                                </div>
                                <div className="w-full md:w-auto lg:w-auto px-2">
                                    <a
                                        className="inline-flex w-full md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                                        href="#"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start md:items-center justify-center">
                            <img
                                className="block w-6 h-6 mr-2 object-contain"
                                src="nigodo-assets/circle-icon-green.svg"
                                alt=""
                            />
                            <span className="md:text-lg font-extrabold">
                                Start your free 14-day trial today, no credit card required.
                            </span>
                        </div>
                    </div>
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
                            {submit}
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

export default FormSection