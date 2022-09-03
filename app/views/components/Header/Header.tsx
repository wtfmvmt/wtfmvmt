import Headroom from "react-headroom"
import Avatar from "@mui/material/Avatar"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const SearchIcon = () => (
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
            stroke="white"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.27524 13.8672C10.8789 13.8672 13.8002 10.945 13.8002 7.34033C13.8002 3.73565 10.8789 0.813477 7.27524 0.813477C3.67159 0.813477 0.750244 3.73565 0.750244 7.34033C0.750244 10.945 3.67159 13.8672 7.27524 13.8672Z"
            stroke="white"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

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

const BurgerIcon = () => (
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
)


const Header = ({ favicon, navLinks, cta }) => {

    return (
        <section className="relative pb-24 overflow-hidden">
            <Headroom>
                <Banner message={"Newbie Interest Meeting on 09/06/2022!"} />
                <nav style={{ backdropFilter: 'blur(12px)' }} className="flex justify-between border-b">
                    <BurgerIcon />
                    <div className="px-12 py-6 flex w-full items-center">
                        <a className="flex-shrink-0 text-3xl font-bold font-heading" href="#">
                            <img
                                className="h-9"
                                src="/assets/images/logo-transparent.png"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <div className="hidden xl:flex mx-auto py-3 pl-6 pr-3 border border-gray-200 rounded-lg">
                            <SearchIcon />
                            <input
                                className="w-full bg-transparent border-0 focus:ring-transparent focus:outline-none py-2"
                                type="text"
                                placeholder=""
                            />
                            <select
                                className="pl-6 pr-6 border-0 border-l border-gray-100 focus:border-gray-100 focus:ring-transparent bg-transparent focus:outline-none cursor-pointer"
                                name=""
                                id=""
                            >
                                <option>All&nbsp;items</option>
                                <option>Collection</option>
                                <option>Option</option>
                            </select>
                        </div>

                        <div className="hidden xl:flex items-center">

                            <a className="flex items-center hover:text-gray-600" href="/">
                                <NotificationsActiveIcon />
                            </a>
                            <span>10</span>
                        </div>
                    </div>
                    <a
                        className="hidden xl:flex items-center px-12 border-l font-semibold font-heading hover:text-gray-600"
                        href="/"
                    >
                        <span>WTFMVMT</span>
                    </a>
                    <a className="xl:hidden flex mr-6 items-center text-white" href="#">
                        <div className="xl:flex items-center">

                            <a className="flex items-center hover:text-gray-600" href="/">
                                <NotificationsActiveIcon />
                            </a>
                            <span>10</span>
                        </div>
                    </a>
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                       <BurgerIcon/>
                    </a>
                </nav>


            </Headroom>
        </section>
    )
}

export default Header