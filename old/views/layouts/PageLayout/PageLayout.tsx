import Header from "@components/Header";
import Loader from "@includes/Loader";
import Meta from "@includes/Meta";
import type { ComponentType } from "@typings/Component";
import type { LayoutProps } from "@typings/Layout";
import dynamic from "next/dynamic";
import { memo } from "react";


const PageLayout: ComponentType<LayoutProps> = ({ metaData, menu, header, footer, contact, children }: LayoutProps) => {

    const SpotifyPlayer = dynamic(() => import("@includes/SpotifyPlayer"), {
        loading: () => <Loader />,
        ssr: true
    })

    const Contact = dynamic(() => import("@components/Contact"), {
        loading: () => <Loader />,
        ssr: true
    })

    const Footer = dynamic(() => import("@components/Footer"), {
        loading: () => <Loader />,
        ssr: true
    })

    const Modal = dynamic(() => import("@includes/Modal"), {
        loading: () => <Loader />,
        ssr: true
    })

    const Notifications = dynamic(() => import("@includes/Notifications"), {
        loading: () => <Loader />,
        ssr: true
    })

    const MagicNavigator = dynamic(() => import("@includes/MagicNavigator"), {
        loading: () => <Loader />,
        ssr: true
    })

    const DrawerMenu = dynamic(() => import("@includes/DrawerMenu"), {
        loading: () => <Loader />,
        ssr: true
    })


    return (
        <>
            <Meta {...metaData} />
            <MagicNavigator />
            <Modal />
            <DrawerMenu {...menu} />
            <Notifications />
            <SpotifyPlayer />
            <Header {...header} />
            {children ?? null}
            <Contact {...contact} />
            <Footer {...footer} />
        </>
    )
}

export default memo(PageLayout)