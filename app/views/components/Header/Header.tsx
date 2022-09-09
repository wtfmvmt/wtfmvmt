import Banner from "@components/Banner";
import BurgerIcon from "@components/BurgerIcon";
import SearchIcon from "@components/SearchIcon";
import useMenuDrawerState from "@hooks/useMenuDrawerState";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Badge from '@mui/material/Badge';
import type { HeaderProps } from "@typings/Header";
import Headroom from "react-headroom";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },

];

const Header = ({ favicon, cta, banner, title, search }: HeaderProps) => {

    const MobileNavBurger = () => (
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <div className="xl:flex items-center">
                <a className="flex items-center hover:text-gray-600" href="#">
                    <Badge badgeContent={"1"} color="secondary">
                        <AnnouncementIcon />
                    </Badge>
                    <BurgerIcon action={() => toggleDrawer()} />
                </a>
            </div>
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

                        <div className="xl:flex items-center hidden">
                            <a className="flex items-center hover:text-gray-600" href="/">
                                <Badge badgeContent={"3"} color="primary">
                                    <AnnouncementIcon />
                                </Badge>
                            </a>
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