import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Headroom from "react-headroom";
import Banner from "@components/Banner"
import SearchIcon from "@components/SearchIcon";
import BurgerIcon from "@components/BurgerIcon";

export type NavLink = {
    name: string,
    url?: string
}

export type CallToAction = {
    name: string,
    url: string
}

export type Favicon = {
    src: string,
    url?: string
}


export type BannerProps = {
    messages: string[]
}
export type HeaderProps = {
    favicon: Favicon,
    navLinks: NavLink[],
    cta: CallToAction,
    banner: BannerProps
}


const Header = ({ favicon, navLinks, cta, banner }: HeaderProps) => {

    return (
        <section className="relative pb-20 overflow-hidden">
            <Headroom>
                <Banner {...banner} />
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

                            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                                <a className="items-center pl-10 pr-2" href="#">
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
                            </a>
                        </div>
                    </a>

                </nav>


            </Headroom>
        </section>
    )
}

export default Header