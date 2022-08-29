import Headroom from "react-headroom"
import Avatar from "@mui/material/Avatar"


const Banner = ({ message }) => {
    return (
        <div className="py-2 bg-black">
            <div className="flex items-center justify-center">
                <svg
                    className="mr-2"
                    width={18}
                    height={11}
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="3.07129"
                        width={4}
                        height={10}
                        rx={2}
                        transform="rotate(-45 0 3.07129)"
                        fill="white"
                    />
                    <rect
                        x={8}
                        y="2.82861"
                        width={4}
                        height={10}
                        rx={2}
                        transform="rotate(-45 8 2.82861)"
                        fill="white"
                    />
                </svg>
                <p className="text-xs font-bold font-heading text-blue-100">
                    {message}
                </p>
            </div>
        </div>
    )
}
const Header = ({ favicon, navLinks, cta }) => {

    return (
        <section className="relative pb-24 overflow-hidden">
            <Headroom>
                <Banner message={"Newbie Interest Meeting on 09/06/2022!"}/>
                <nav style={{ backdropFilter: 'blur(12px)'}}className="flex justify-between border-b">
                    <a className="hidden xl:flex items-center px-12 border-r" href="#">
                        <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="white" />
                            <path d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z" fill="white" />
                            <path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="white" />
                        </svg>
                    </a>
                    <div className="px-12 py-6 flex w-full items-center">
                        <a className="flex-shrink-0 text-3xl font-bold font-heading" href="#">
                            <img
                                className="h-9"
                                src="yofte-assets/logos/yofte-logo.svg"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <div className="hidden xl:flex mx-auto py-3 pl-6 pr-3 bg-white border border-gray-200 rounded-lg">
                            <svg
                                className="w-8 h-10 mr-2"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5 17.1309L12.5042 11.9551"
                                    stroke="black"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.27524 13.8672C10.8789 13.8672 13.8002 10.945 13.8002 7.34033C13.8002 3.73565 10.8789 0.813477 7.27524 0.813477C3.67159 0.813477 0.750244 3.73565 0.750244 7.34033C0.750244 10.945 3.67159 13.8672 7.27524 13.8672Z"
                                    stroke="black"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                className="w-full border-0 focus:ring-transparent focus:outline-none py-2"
                                type="text"
                                placeholder=""
                            />
                            <select
                                className="pl-6 pr-6 border-0 border-l border-gray-100 focus:border-gray-100 focus:ring-transparent focus:outline-none cursor-pointer"
                                name=""
                                id=""
                            >
                                <option>All&nbsp;items</option>
                                <option>Collection</option>
                                <option>Option</option>
                            </select>
                        </div>
                        <div className="hidden xl:flex items-center">
                            <a className="mr-10 hover:text-gray-600" href="#">
                                <svg
                                    width={23}
                                    height={20}
                                    viewBox="0 0 23 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a className="flex items-center hover:text-gray-600" href="#">
                                <svg
                                    className="mr-3"
                                    width={23}
                                    height={23}
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
                                    3
                                </span>
                            </a>
                        </div>
                    </div>
                    <a
                        className="hidden xl:flex items-center px-12 border-l font-semibold font-heading hover:text-gray-600"
                        href="/"
                    >
                      <Avatar src="/assets/icons/180x180.png"/>
                        <span>WTFMVMT</span>
                    </a>
                    <a className="xl:hidden flex mr-6 items-center text-gray-900" href="#">
                        <svg
                            className="mr-2"
                            width={23}
                            height={23}
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
                            3
                        </span>
                    </a>
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg
                            width={20}
                            height={12}
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                                fill="#8594A5"
                            />
                        </svg>
                    </a>
                </nav>


            </Headroom>
        </section>
    )
}

export default Header