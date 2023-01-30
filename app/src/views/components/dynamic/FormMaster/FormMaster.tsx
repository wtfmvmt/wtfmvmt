import type { TitleSectionProps } from "@typings/TitleSection"
import TitleSection from "@components/TitleSection"


export type Form = {
    label: string
}

export type Field = {
    title: string,
    forms: Form[]
}

export type FormMaster = {
    name?: string,
    titleSection?: TitleSectionProps,
    fields?: {
        persona?: any,
    }
}

const FormMaster = ({ titleSection, fields }: FormMaster) => {




    return (
        <section className="pt-26 lg:py-26 lg:min-h-screen relative overflow-hidden">
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full border-l-3 border-indigo-900" />
            <img
                className="hidden lg:block absolute bottom-0 right-0 w-1/3"
                src="nigodo-assets/background-elements/pattern-smash-rotate-orange-right.svg"
                alt=""
            />
            <div className="container px-4 mx-auto relative">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
                        <div className="max-w-md xl:max-w-lg mx-auto">
                            <div className="text-center mb-8">
                                <a className="inline-block mx-auto mb-6" href="#">
                                    <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                                </a>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                                    Join our community
                                </h2>
                                <p className="text-lg font-extrabold leading-7 text-indigo-500">
                                    Start your journey with our product
                                </p>
                            </div>
                            <form action="">
                                <div className="mb-6">
                                    <label className="block mb-2 font-extrabold" htmlFor="">
                                        Name
                                    </label>
                                    <input
                                        className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-black bg-opacity-70 hover:bg-opacity-100 transition-all shadow border-2 border-indigo-900 rounded"
                                        type="text"
                                        placeholder="David"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 font-extrabold" htmlFor="">
                                        Email
                                    </label>
                                    <input
                                        className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-black bg-opacity-70 hover:bg-opacity-100 transition-all shadow border-2 border-indigo-900 rounded"
                                        type="email"
                                        placeholder="hello@shuffle.dev"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 font-extrabold" htmlFor="">
                                        Password
                                    </label>
                                    <input
                                        className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-black bg-opacity-70 hover:bg-opacity-100 transition-all shadow border-2 border-indigo-900 rounded"
                                        type="password"
                                        placeholder="**********"
                                    />
                                </div>
                                <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                                    Sign Up
                                </button>
                                <a
                                    className="flex items-center justify-center mb-6 py-4 px-6 hover:text-white leading-6 text-lg font-extrabold bg-black bg-opacity-70 hover:bg-opacity-100 transition-all hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                                    href="#"
                                >
                                    <img
                                        className="w-6 h-6 mr-3"
                                        src="nigodo-assets/sign-up/icon-google.svg"
                                        alt=""
                                    />
                                    <span>Sign in with Apple</span>
                                </a>
                                <p className="text-center font-extrabold">
                                    Don’t have an account?{" "}
                                    <a className="text-indigo-500 hover:underline" href="#">
                                        Sign In
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 py-24 lg:py-0 bg-orange-200 lg:bg-transparent border-3 lg:border-b-0 lg:border-r-0 border-indigo-900 lg:border-t-0 relative">
                        <img
                            className="absolute top-0 lg:-mt-52 left-0"
                            src="nigodo-assets/background-elements/pattern-dots-2-orange-left.svg"
                            alt=""
                        />
                        <img
                            className="lg:hidden absolute bottom-0 right-0 w-1/2"
                            src="nigodo-assets/background-elements/pattern-smash-rotate-orange-right.svg"
                            alt=""
                        />
                        <div className="relative max-w-xl mx-auto bg-black bg-opacity-70 hover:bg-opacity-100 transition-all px-6 pt-16 pb-20 border-3 border-indigo-900 rounded-2xl shadow-md">
                            <div className="flex">
                                <div className="self-start text-indigo-300 opacity-10">
                                    <svg
                                        className="w-10 md:w-16"
                                        width={75}
                                        height={64}
                                        viewBox="0 0 75 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="text-center px-4">
                                    <span className="text-lg font-extrabold text-indigo-500">
                                        Testimonials
                                    </span>
                                    <h2 className="md:text-2xl font-extrabold mt-3 mb-12">
                                        The best solution for anyone who wants to work a flexible
                                        schedule but still earn a full-time income.
                                    </h2>
                                </div>
                                <div className="self-end text-indigo-300 opacity-10">
                                    <svg
                                        className="w-10 md:w-16"
                                        width={75}
                                        height={64}
                                        viewBox="0 0 75 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.62939e-06 63.3689L1.87067 50.0404C5.61201 50.3522 8.65186 49.7286 10.9902 48.1697C13.3285 46.6888 14.9654 44.5063 15.9007 41.6224C16.7581 38.8164 16.914 35.5427 16.3684 31.8014H7.62939e-06V3.8147e-06H31.8014V31.8014C31.8014 43.0254 29.1902 51.5213 23.9679 57.2892C18.7457 63.1351 10.7564 65.1616 7.62939e-06 63.3689ZM42.3239 63.3689L44.1946 50.0404C47.9359 50.3522 50.9757 49.7286 53.3141 48.1697C55.6524 46.6888 57.2892 44.5063 58.2246 41.6224C59.082 38.8164 59.2378 35.5427 58.6922 31.8014H42.3239V3.8147e-06H74.1252V31.8014C74.1252 43.0254 71.5141 51.5213 66.2918 57.2892C61.0695 63.1351 53.0802 65.1616 42.3239 63.3689Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-center">
                                <img
                                    className="block mx-auto mb-4"
                                    src="nigodo-assets/team/avatar1.png"
                                    alt=""
                                />
                                <h3 className="text-xl font-extrabold leading-7">
                                    Macauley Herring
                                </h3>
                                <p className="text-gray-400 font-bold leading-7 mb-6">
                                    CEO &amp; Founder at Nigodo
                                </p>
                                <div className="flex items-center justify-center">
                                    <button className="inline-block w-4 h-4 mr-4 rounded-full bg-indigo-100 hover:bg-indigo-200" />
                                    <button className="inline-block w-4 h-4 mr-4 rounded-full bg-indigo-500" />
                                    <button className="inline-block w-4 h-4 rounded-full bg-indigo-100 hover:bg-indigo-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default FormMaster