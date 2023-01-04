import Header from "@components/Header";
import Loader from "@includes/Loader";
import RootLayout from "@layouts/RootLayout";
import type { ComponentType } from "@typings/Component";
import type { LayoutProps } from "@typings/Layout";
import dynamic from "next/dynamic";
import { memo } from "react";

const PageLayout: ComponentType<LayoutProps> = ({ metaData, menu, header, footer, contact, children }: LayoutProps) => {

    const Contact = dynamic(() => import("@components/Contact"), {
        loading: () => <Loader />,
        ssr: false
    })

    const Footer = dynamic(() => import("@components/Footer"), {
        loading: () => <Loader />,
        ssr: false
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
            {children ?? null}
            <Contact {...contact} />
            <Footer {...footer} />
        </RootLayout>
    )
}

export default memo(PageLayout)