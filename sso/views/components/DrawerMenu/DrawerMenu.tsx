import type { HeaderProps } from "@typings/Header"
import uuid from "@utils/uuid"
import { CSSTransition } from 'react-transition-group';

import ClickAwayListener from '@mui/base/ClickAwayListener';

import useMenuDrawerState from "@hooks/useMenuDrawerState"

export type DrawerMenuProps = HeaderProps

const DrawerMenu = ({ favicon, navLinks, actionLinks, actionButtons }: DrawerMenuProps) => {

    const { open } = useMenuDrawerState()


    const Favicon = () => (
        <a className="text-xl text-white font-semibold" href={favicon.url}>
            <img
                className="h-8"
                src={favicon.src}
                alt=""
                width="auto"
            />
        </a>

    )

    const NavLinks = () => (

        navLinks &&
        <ul className="mb-8 text-sm font-medium">
            {
                navLinks.map((link, index) => (
                    <li key={uuid().key}>
                        <a
                            className="flex items-center pl-3 py-3 pr-4 text-gray-50  rounded hover:bg-gray-900 transition-all"
                            href={link.url}
                        >
                            <span>{link.name}</span>

                        </a>
                    </li>

                ))
            }
        </ul>


    )


    const ActionButtons = () => {
        return (
            actionButtons ? actionButtons.map((action, index) => (
                <div key={index} className="pt-8">
                    <a
                        className="flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded"
                        href={action.url}
                    >
                        <span className="inline-block mr-4">
                            🎬
                        </span>
                        <span>{action.name}</span>
                    </a>

                </div>
            )) : <></>
        )
    }
    const ActionLinks = () => (
        actionLinks &&
        <ul className="text-sm font-medium">
            {
                actionLinks.map((action, index) => (
                    <li key={index}>
                        <a
                            className="flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded"
                            href={action.url}
                        >

                            <span>{action.name}</span>
                        </a>
                    </li>

                ))
            }
        </ul>
    )


    return (

        <CSSTransition
            in={open}
            timeout={900}
            unmountOnExit>
            <div style={{
                backdropFilter: 'blur(9px)',
            }} className=" navbar-menu fixed top-0 left-0 bottom-0 w-3/4 lg:w-80 sm:max-w-xs z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-70" />
                <nav className="relative flex flex-col pt-6 pb-8 h-full w-full overflow-y-auto">
                    <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-gray-700">
                        <Favicon />
                    </div>
                    <div className="px-4 pb-6">
                        <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
                            Links
                        </h3>
                        <NavLinks />
                        <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
                            Actions
                        </h3>
                        <ActionLinks />
                    </div>
                </nav>
            </div>

        </CSSTransition>


    )
}

export default DrawerMenu