import Banner from "@components/Banner";
import BurgerIcon from "@components/BurgerIcon";
import React from "react"
import useBannerState from "@hooks/useBannerState";
import useMenuDrawerState from "@hooks/useMenuDrawerState";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Autocomplete from '@mui/material/Autocomplete';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import type { HeaderProps } from "@typings/Header";
import Headroom from "react-headroom";
import type { ComponentType } from "@typings/Component";
import SearchBar from "@components/SearchBar";
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header: ComponentType<HeaderProps> = ({ favicon, cta, banner, search }: HeaderProps) => {

    const { toggleDrawer } = useMenuDrawerState()
    const { toggleBanner } = useBannerState()


    const MobileNavBurger = () => (
        <a className="navbar-burger cursor-pointer self-center mr-12 xl:hidden">
            <div className="xl:flex items-center">
                <a className="flex items-center hover:text-gray-600">

                    <BurgerIcon action={() => toggleDrawer()} />
                </a>
            </div>
        </a>
    )



    const Favicon = () => {
        return (
            favicon ? <a className="flex-shrink-0 text-3xl font-bold font-heading" href={favicon?.url}>
                <img
                    className="h-16"
                    src={favicon?.image?.src}
                    alt={favicon?.image?.alt}
                    width="auto"
                />
            </a> : <>FAVICON_NOT_FOUND</>
        )
    }

    const NavBurger = () => {
        return (

            <div className="cursor-pointer hover:scale-50 duration-500 hidden xl:flex">
                <BurgerIcon action={() => toggleDrawer()} />
            </div>)
    }


    return (
        <Headroom>
            <section className="relative pb-6 overflow-hidden w-full">

                <Banner {...banner} />
                <nav className="flex justify-between backdrop-blur-sm">

                    <div className="px-12 py-6 flex w-full items-center">
                        <Favicon />
                        <div className="xl:flex items-center ">
                            <a className="flex items-center hover:text-purple-600">
                                {/*Actions:Slot*/}
                            </a>
                        </div>
                    </div>
                    <NavBurger />
                    <MobileNavBurger />
                </nav>
            </section>
        </Headroom>
    )

}

export default React.memo(Header)
















