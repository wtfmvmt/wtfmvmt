
import type { ComponentType } from "@models/typings/Component"

const ContentSearch: ComponentType<any> =
    ({ content, title, heading, description }: any) => {


        const CallToAction = () => {
            return (
                <div className="mt-20 text-center">
                    <a
                        className="inline-block px-12 py-4 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3"
                        href="#"
                    >
                        Show more
                    </a>
                </div>
            )
        }

        const Content = () => {
            return (
                content ? <div className="flex flex-wrap -mx-4 -mb-8">


                    {
                        content.map((item, index) => {
                            return (
                                <div key={index} className="w-full px-4 mb-8 transition-all sm:w-1/2 hover:scale-90">
                                    <a
                                        className="block overflow-hidden bg-black border-indigo-900 shadow-md bg-opacity-80 border-3 rounded-2xl"
                                        href={item?.url ?? "#"}
                                    >
                                        <img
                                            className="block object-cover w-full h-72"
                                            loading="lazy"
                                            src={item?.cover?.src ?? "https://via.placeholder.com/300"}
                                            alt={item?.cover?.alt ?? "Placeholder"}
                                        />
                                        <div className="px-6 py-8 border-indigo-900 md:p-10 border-t-3">
                                            <h2 className="mb-6 text-2xl font-extrabold text-gray-200">
                                                {item.title}
                                            </h2>
                                            <p className="mb-6 text-xl font-bold">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center">
                                                <img
                                                    className="block w-16 h-16"
                                                    src="nigodo-assets/blog/avatar-author.png"
                                                    alt=""
                                                />
                                                <div className="ml-3">
                                                    <h5 className="text-xl font-bold leading-7">John Doe</h5>
                                                    <span className="text-xl font-bold leading-7">
                                                        {item?.date ?? "2021-01-01"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    } </div>
                    : <>NO_CONTENT</>
            )
        }

        const Header = () => {
            return (
                <div className="py-20 border-indigo-900 border-b-3 text-slate">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl">
                            <span className="text-xl font-extrabold text-blue-700 font-major">
                                {title ? title : "TITLE_NOT_FOUND"}
                            </span>
                            <h1 className="mt-2 mb-4 text-3xl font-extrabold md:text-4xl font-heading font-major">
                                {heading ? heading : "HEADING_NOT_FOUND"}
                            </h1>
                            <p className="max-w-3xl text-xl font-extrabold leading-8 font-share_tech">
                                {description ? description : "DESCRIPTION_NOT_FOUND"}
                            </p>
                        </div>
                    </div>
                </div>

            )
        }

        const SearchBar = () => {

            return (

                <div className="w-full px-4 mb-16 lg:w-1/3 lg:mb-0">
                    <div className="w-full px-4 mb-16 lg:w-1/3 lg:mb-0">

                        <div className="inline-flex items-center max-w-md p-4 mb-12 bg-white border-2 border-indigo-900 rounded shadow">
                            <a className="text-indigo-900 hover:text-indigo-800" href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94731 18.6997 5.81279 16.9855 4.27665C15.2714 2.74051 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98757 4.61514 4.61515C2.98756 6.24273 2.04543 8.43204 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63437C4.4046 8.2765 5.07128 7.02922 6.05025 6.05026C7.02922 5.07129 8.2765 4.4046 9.63436 4.13451C10.9922 3.86441 12.3997 4.00303 13.6788 4.53285C14.9579 5.06266 16.0511 5.95987 16.8203 7.11101C17.5895 8.26216 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z"
                                        fill="#171952"
                                    />
                                </svg>
                            </a>
                            <input
                                className="px-3 text-lg font-extrabold text-indigo-900 placeholder-indigo-900 bg-transparent outline-none"
                                type="search"
                                placeholder="Search"
                            />
                        </div>
                        <ul>
                            <li className="mb-8">
                                <a className="inline-block text-xl font-extrabold" href="#">
                                    All Categories
                                </a>
                            </li>
                            <li className="mb-8">
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Technology
                                </a>
                            </li>
                            <li className="mb-8">
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Development
                                </a>
                            </li>
                            <li className="mb-8">
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Marketing
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-block text-xl font-extrabold text-orange-400 hover:text-orange-500"
                                    href="#"
                                >
                                    Startup
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>


            )
        }


        return (
            <section className="transition-all">
                <Header />
                <div className="relative pt-12 pb-24">
                    <div className="container relative px-4 mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <SearchBar />
                            <div className="w-full px-4 lg:w-2/3">
                                <Content />
                                <CallToAction />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

export default ContentSearch