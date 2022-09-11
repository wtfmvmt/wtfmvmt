import useMenuDrawerState from "@hooks/useMenuDrawerState"
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from "@mui/icons-material/Close";
import type { Favicon } from "@typings/Favicon"
import Icon from "@components/Icon"
import type { CallToAction } from "@typings/CallToAction";
export type Link = {
    name: string,
    url: string,
    icon?: string
}

export type DrawerMenuProps = {
    favicon: Favicon,
    links: Link[],
    cta?: CallToAction[]
}

const DrawerMenu = ({ favicon, links, cta }: DrawerMenuProps) => {

    const { open, toggleDrawer } = useMenuDrawerState()

    const CTA = () => {
        return (
            <div className="">
                {
                    cta && cta.map((callToAction, index) => {

                        return (
                            <a
                                key={index}
                                className="block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800 border:bg-purple-800"
                                href={callToAction.url}
                            >
                                {callToAction.name}
                            </a>

                        )
                    })
                }
            </div>
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
                                <Icon id={link.icon}/>
                                <span className="hvr-wobble-horizontal ">
                                    {link.name}
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
            <a className="mr-auto text-2xl font-bold leading-none" href={favicon.url}>
                <img
                    className="h-16"
                    src={favicon.src}
                    alt="wtfmvmt-logo"
                    width="auto"
                />
            </a>
        )
    }

    const CloseDrawerButton = () => {
        return (
            <button onClick={() => toggleDrawer()} className="navbar-close">
                <CloseIcon />
            </button>
        )
    }

    return (
        <CSSTransition
            in={open}
            timeout={900}
            unmountOnExit
        >
            <div className="transition-all navbar-menu relative z-50">
                <ClickAwayListener onClickAway={() => toggleDrawer()}>
                    <nav style={{ backdropFilter: 'blur(10px)' }} className={`${!open ? "slide-out-blurred-left" : ""} slide-in-blurred-left fixed top-0 bg-black bg-opacity-30 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 border-r overflow-y-auto`}>
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