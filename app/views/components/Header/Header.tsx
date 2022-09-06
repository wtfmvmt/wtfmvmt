import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Headroom from "react-headroom";
import Banner from "@components/Banner"
import SearchIcon from "@components/SearchIcon";
import BurgerIcon from "@components/BurgerIcon";
import useMenuDrawerState from "@hooks/useMenuDrawerState"
import type { HeaderProps } from "@typings/Header"
import SearchBar from 'react-js-search';


const Header = ({ favicon, cta, banner, title, search }: HeaderProps) => {

    const MobileNavBurger = () => (
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <BurgerIcon action={() => toggleDrawer()} />
        </a>
    )


    const SearchBar = () => {

        return (

            <>
                {
                    search && (
                        <div className="hidden xl:flex mx-auto py-3 pl-6 pr-3 border border-gray-200 rounded-lg">

                            <SearchIcon />
                            <input
                                className="w-full bg-transparent border-0 focus:ring-transparent focus:outline-none py-2"
                                type="text"
                                placeholder="Seek ye & Find"
                            />
                            <select
                                className="flicker-in-1 pl-6 pr-6 border-0 bg-black border-l border-gray-100 focus:border-gray-100 focus:ring-transparent bg-transparent focus:outline-none cursor-pointer"
                                name=""
                                id="search-selector"
                            >
                                {
                                    search.map((item, index) => (
                                        <option key={index} className="bg-black">{item.id}</option>
                                    ))
                                }
                            </select>
                        </div>
                    )
                }
            </>
        )
    }

    const Favicon = () => {
        return (
            <>
                {
                    favicon && (

                        <a className="flex-shrink-0 text-3xl font-bold font-heading" href={favicon.url}>
                            <img
                                className="h-16"
                                src={favicon.src}
                                alt=""
                                width="auto"
                            />
                        </a>
                    )
                }
            </>
        )
    }


    const Title = () => {
        return (
            <>

                {
                    <a
                        className="hidden xl:flex items-center px-12 border-l font-semibold font-heading hover:text-gray-600"
                        href={title.url}
                    >
                        <span>{title.name}</span>
                    </a>
                }
            </>
        )
    }

    const NavBurger = () => (

        <div className="hidden xl:flex">
            <BurgerIcon action={() => toggleDrawer()} />
        </div>
    )
    const { toggleDrawer } = useMenuDrawerState()

    return (
        <section className="relative pb-20 overflow-hidden w-full">
            <Headroom>
                <Banner {...banner} />
                <nav style={{ backdropFilter: 'blur(15px)' }} className="flex justify-between border-b">

                    <div className="px-12 py-6 flex w-full items-center">
                        <Favicon />
                        <SearchBar />

                        <div className="hidden xl:flex items-center">
                            <a className="flex items-center hover:text-gray-600" href="/">
                                <NotificationsActiveIcon />
                            </a>
                            <span>0</span>
                        </div>

                    </div>
                    <NavBurger />
                    <MobileNavBurger />
                </nav>
            </Headroom>
        </section>
    )
}

export default Header