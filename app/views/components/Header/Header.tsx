import Banner from "@components/Banner";
import BurgerIcon from "@components/BurgerIcon";
import Bread from "@components/Header/Bread";
import useBannerState from "@hooks/useBannerState";
import useMenuDrawerState from "@hooks/useMenuDrawerState";
import type { ComponentType } from "@typings/Component";
import type { HeaderProps } from "@typings/Header";
import React from "react";
import Headroom from "react-headroom";



const Header: ComponentType<HeaderProps> = ({ favicon, cta, banner, search }: HeaderProps) => {

    const { toggleDrawer } = useMenuDrawerState()
    const { toggleBanner } = useBannerState()


    const MobileNavBurger = () => (
        <a className="self-center mr-12 cursor-pointer navbar-burger lg:hidden">
            <div className="items-center xl:flex">
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

            <div className="hidden duration-500 cursor-pointer hover:scale-50 xl:flex">
                <BurgerIcon action={() => toggleDrawer()} />
            </div>)
    }


    return (
        <Headroom>
            <section className="relative w-full pb-6 overflow-hidden">
                <Banner {...banner} />
                <nav className="flex justify-between backdrop-blur-sm">
                    <div className="flex items-center w-full px-12 py-6">
                        <Favicon />
                        <div className="items-center justify-center flex-1 xl:flex">
                            <a className="flex items-center hover:text-purple-600">
                                <Bread />
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
















