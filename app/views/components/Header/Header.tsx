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


const Header: ComponentType<HeaderProps> = ({ favicon, cta, banner, search }: HeaderProps) => {

    const { toggleDrawer } = useMenuDrawerState()
    const { toggleBanner } = useBannerState()

    const Notifier = () => {
        return (
            <div onClick={() => toggleBanner()} className="hidden lg:flex cursor-pointer">
                <Badge badgeContent={"1"} color="secondary">
                    <AnnouncementIcon />
                </Badge>
            </div>
        )
    }

    const MobileNavBurger = () => (
        <a className="navbar-burger cursor-pointer self-center mr-12 xl:hidden">
            <div className="xl:flex items-center">
                <a className="flex items-center hover:text-gray-600">

                    <BurgerIcon action={() => toggleDrawer()} />
                </a>
            </div>
        </a>
    )

    const SearchBar = () => {

        return (
            <div className="hidden xl:flex mx-auto py-3 pl-6 pr-3 border border-gray-200 rounded-lg">
                <Autocomplete
                    id="combo-box-demo"
                    options={[]}
                    sx={{ width: 300, border: 0, color: 'white', fontFamily: 'var(--font-primary)' }}

                    renderInput={(params) =>
                        <TextField variant="standard" {...params}
                            InputProps={{
                                sx: {
                                    outline: 'white',
                                    border: 'white',
                                    color: 'white',
                                    '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                    '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                                }
                            }}
                            InputLabelProps={{
                                sx: {
                                    border: 'white',
                                },
                            }}
                            sx={{

                                color: '#FFFFFF',
                                fontFamily: 'Major Mono Display',
                                borderWidth: '0px',
                                outline: 0,
                                padding: '0.5rem 0.5rem 0 0',
                                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                                '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                            }} className="w-full bg-transparent border-1 border-white focus:ring-transparent focus:outline-none py-2" label={<span className="text-white">SEEK & FIND</span>} />
                    }
                />

                {
                    search ? <select
                        className="flicker-in-1 pl-6 pr-6 border-0 bg-black border-l border-gray-100 focus:border-gray-100 focus:ring-transparent bg-transparent focus:outline-none cursor-pointer"
                        name=""
                        id="search-selector"
                    >
                        {
                            search?.map((item, index) => (
                                <option key={index} className="bg-black">{item?.id}</option>
                            ))
                        }
                    </select> : <select
                        className="flicker-in-1 pl-6 pr-6 border-0 bg-black border-l border-gray-100 focus:border-gray-100 focus:ring-transparent bg-transparent focus:outline-none cursor-pointer"
                        name=""
                        id="search-selector"
                    >
                        <option className="bg-black">{"SEARCH_NOT_FOUND"}</option>

                    </select>
                }
            </div>
        )
    }

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

            <div className="cursor-pointer hover:scale-90 duration-700 hidden xl:flex">
                <BurgerIcon action={() => toggleDrawer()} />
            </div>)
    }


    return (
        <Headroom>
            <section className="relative pb-20 overflow-hidden w-full border-b border-4 border-gray-400">

                <Banner {...banner} />
                <nav className="flex justify-between backdrop-blur-md">

                    <div className="px-12 py-6 flex w-full items-center">
                        <Favicon />
                        <SearchBar />

                        <div className="xl:flex items-center ">
                            <a className="flex items-center hover:text-purple-600">
                                <Notifier />
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
















