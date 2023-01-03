import Header from "@components/Header";
import RootLayout from "@layouts/RootLayout";
import type { ComponentType } from "@typings/Component";
import type { LayoutProps } from "@typings/Layout";
import dynamic from "next/dynamic";
import { memo } from "react";
import Loader from "@includes/Loader"

const PageLayout: ComponentType<LayoutProps> = ({ metaData, menu, header, footer, children }: LayoutProps) => {

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
        ssr: false
    })

    const MagicNavigator = dynamic(() => import("@includes/MagicNavigator"), {
        loading: () => <Loader />,
        ssr: false
    })

    const DrawerMenu = dynamic(() => import("@includes/DrawerMenu"), {
        loading: () => <Loader />,
        ssr: true
    })


    return (
        <RootLayout metaData={metaData}>
            <MagicNavigator />
            <Modal />
            <DrawerMenu {...menu} />
            <Notifications />
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default memo(PageLayout)