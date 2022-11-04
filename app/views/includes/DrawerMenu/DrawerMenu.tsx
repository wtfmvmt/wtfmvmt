import useMenuDrawerState from "@hooks/useMenuDrawerState";
import type { DrawerMenuProps } from "@models/typings/DrawerMenu";
import CloseIcon from "@mui/icons-material/Close";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';

import Icon from "@components/Icon";

const DrawerMenu = ({ favicon, links, cta }: DrawerMenuProps) => {

    const { open, toggleDrawer } = useMenuDrawerState()

    const CTA = () => {
        return (
            cta ? <div className="">
                {
                    cta.map((callToAction, index) => {

                        return (
                            <a
                                key={index}
                                className="block mb-6 py-4 bg-orange-500 hover:rounded text-center leading-6 text-lg font-extrabold hover:bg-opacity-50 duration-250 ease-in rounded text-gray-800 hover:text-black"
                                href={callToAction.url}
                            >
                                {callToAction.name}
                            </a>
                        )
                    })}

            </div> : <></>
        )
    }

    const Links = () => {
        return (
            <div className="my-auto">
                <ul className="py-10">
                    {links && links.map((link, index) => (
                        <li key={index}
                            className="mb-1">
                            <a
                                className="hover:text-purple-500 block p-4 text-lg font-extrabold hover:bg-black rounded"
                                href={link.url}
                            >
                                <span className="hvr-wobble-horizontal inline-block overflow-hidden">
                                    <Icon icon={link?.icon} />{link.name}
                                </span>
                            </a>
                        </li>
                    ))}

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
            <button onClick={() => toggleDrawer()} className="navbar-close hover:scale-90 hover:bg-purple-700 hover:rounded-full transition-all">
                <CloseIcon />
            </button>
        )
    }

    return (
        <CSSTransition
            in={open}
            timeout={400}
            unmountOnExit
        >
            <div className="transition-all navbar-menu relative z-50">
                <ClickAwayListener onClickAway={() => toggleDrawer()}>
                    <nav className={`${!open ? "scale-out-hor-left" : ""} backdrop-blur-md scale-in-hor-left fixed top-0 bg-opacity-30 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 overflow-y-auto`}>
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