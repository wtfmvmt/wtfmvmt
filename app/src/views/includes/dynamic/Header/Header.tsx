import type { LinkProps } from "@typings/Link";
import type { FaviconProps } from "@typings/Favicon";
import type { IComponent } from "@typings/Component"
import type { CallToActionProps } from "@typings/CallToAction";



export const defaultProps = {
    favicon: {
        image: {
            src: "https://res.cloudinary.com/facade-os/image/upload/v1675203567/Fa%C3%A7ade/WTFMVMT/meta/WTFMVMT-FULL-logo-transparent-background-WHITE_i2x8cb.png",
            alt: ""
        },
        url: "/"
    },

    cta: {
        primary: {
            name: "Support Us"
        },
        secondary: {
            name: "Contact"
        }
    },
    links: [
        {
            name: "Events",
            url: "#events"
        },
        {
            name: "Memberships",
            url: "#memberships"
        },
        {
            name: "Partners",
            url: "#partners"
        },
        {
            name: "About",
            url: "#about"
        },
        {
            name: "Contact",
            url: "#contact"
        }
    ]
}

export interface IHeader extends IComponent {
    links?: LinkProps[];
    cta?: {
        primary?: CallToActionProps;
        secondary?: CallToActionProps;
    }
    favicon?: FaviconProps;
}


export default function Header({ links, favicon, cta }): IHeader {

    const MobileBurgerButton = () => (
        <div className="w-auto lg:hidden">
            <a className="inline-block" href="#">
                <svg
                    className="navbar-burger text-purple-500"
                    width={45}
                    height={45}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
        </div>
    )
    return (
        <section className="py-6 fixed z-50 w-full top-0">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between px-6 py-3.5 bg-black bg-opacity-50 backdrop-blur-lg rounded-full">
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto">
                                <a href={favicon?.url ?? defaultProps.favicon.url}>
                                    <img loading="lazy" className="h-12" src={favicon?.image?.src ?? defaultProps.favicon.image.src}
                                        alt={favicon?.image?.alt ?? defaultProps.favicon.image.alt} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto hidden lg:block">
                                <ul className="flex items-center justify-center">
                                    {
                                        links ?
                                            links.map((link) => (
                                                <li className="mr-9">
                                                    <a
                                                        className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                                        href="#"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </li>
                                            )) :
                                            defaultProps.links.map((link) => (
                                                <li className="mr-9">
                                                    <a
                                                        className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                                        href="#"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </li>
                                            ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto hidden lg:block">
                                <div className="flex flex-wrap -m-2">
                                    <div className="w-full md:w-auto p-2">
                                        <a
                                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 border border-gray-800 rounded-full"
                                            href={cta?.primary ? cta?.primary?.name : defaultProps.cta.primary.name}
                                        >
                                            {cta?.primary ? cta?.primary?.name : defaultProps.cta.primary.name}
                                        </a>
                                    </div>
                                    <div className="w-full md:w-auto p-2">
                                        <a
                                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-200 rounded-full"
                                            href={cta?.secondary ? cta?.secondary?.name : defaultProps.cta.secondary.name}

                                        >
                                            {cta?.secondary ? cta?.secondary?.name : defaultProps.cta.secondary.name}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <MobileBurgerButton />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}