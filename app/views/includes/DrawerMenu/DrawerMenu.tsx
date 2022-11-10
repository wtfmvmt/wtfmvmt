import useMenuDrawerState from "@hooks/useMenuDrawerState";
import type { DrawerMenuProps } from "@typings/DrawerMenu";
import CloseIcon from "@mui/icons-material/Close";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';
import SearchBar from "@views/components/SearchBar";

const DrawerMenu = ({ favicon, links, cta }: DrawerMenuProps) => {

    const { open, toggleDrawer } = useMenuDrawerState()

    const CTA = () => {

        return (

            cta ? <div>
                {
                    cta.map((callToAction, index) => {

                        return (
                            <a
                                key={index}
                                className="block font-major bg-opacity-80 shadow-2xl hover:bg-black hover:text-white duration-300 mb-6 py-4 bg-blue-500 cursor-pointer hover:rounded text-center leading-6 text-lg font-extrabold hover:bg-opacity-50 ease-in-out rounded text-slate-800"
                                href={callToAction?.url}
                            >
                                {callToAction?.name ?? "CTA_NOT_FOUND"}
                            </a>
                        )
                    })}

            </div> : <>CTA_NOT_FOUND</>
        )
    }

    const Links = () => {
        return (
            <div className="my-auto font-share_tech text-gray-200">
                <ul className="py-10">
                    {
                        links ? links.map((link, index) => (
                            <li key={index}
                                className="mb-1 group">
                                <a
                                    className="group-hover:text-blue-500 duration-250 ease-in-out group-hover:font-major block p-4 text-lg font-extrabold group-hover:bg-opacity-50 group-hover:bg-black rounded"
                                    href={link?.url}
                                >
                                    <span className="hvr-wobble-horizontal inline-block overflow-hidden">
                                        <img loading="lazy" src={link?.icon} className="h-8 inline" /> {link?.name}
                                    </span>
                                </a>
                            </li>
                        )) : <>LINKS_NOT_FOUND</>
                    }

                </ul>
            </div>
        )
    }

    const Favicon = () => {

        return (
            <a className="mr-auto text-2xl font-bold leading-none" href={favicon?.url ?? "FAVICON_NOT_FOUND"}>
                <img
                    className="h-16"
                    loading="lazy"
                    src={favicon?.image?.src ?? "FAVICON_NOT_FOUND"}
                    alt={favicon?.image?.alt ?? "FAVICON_NOT_FOUND"}
                    width="auto"
                />
            </a>
        )
    }

    const CloseDrawerButton = () => {
        return (
            <button onClick={() => toggleDrawer()} className="navbar-close  hover:scale-90 hover:bg-purple-700 hover:rounded-full transition-all">
                <CloseIcon sx={{ color: 'white' }} />
            </button>
        )
    }

    return (
        <CSSTransition
            in={open}
            timeout={333}
            unmountOnExit
        >
            <div className="transition-all navbar-menu relative z-50">
                <ClickAwayListener onClickAway={() => toggleDrawer()}>
                    <nav className={`${!open ? "scale-out-hor-left" : ""} backdrop-blur-lg scale-in-hor-left fixed top-0 bg-opacity-30 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 overflow-y-auto`}>
                        <div className="flex items-center mb-8">
                            <Favicon />
                            <CloseDrawerButton />
                        </div>
                        <Links />
                        <CTA />
                    </nav>
                </ClickAwayListener>
            </div>
        </CSSTransition>
    )
}

export default DrawerMenu