import FadeAnimation from "@components/FadeAnimation";
import Footer from "@components/Footer";
import Header from "@components/Header";
import DrawerMenu from "@includes/DrawerMenu";
import Notifications from "@includes/Notifications";
import RootLayout from "@layouts/RootLayout";
import type { IComponent } from "@typings/Component";
import type { LayoutProps } from "@typings/Layout";
import MagicNavigator from "@views/includes/MagicNavigator";
import React from "react";
import Modal from "@includes/Modal"
import ScrollToTop from "react-scroll-to-top";
const PageLayout: IComponent<LayoutProps> =
    ({ metaData, menu, header, footer, children }:
        LayoutProps) => {

        return (
            <RootLayout metaData={metaData}>
                <MagicNavigator />
                <Modal />
                <Notifications />
                <DrawerMenu {...menu} />
                <Header {...header} />
                <FadeAnimation duration={333} triggerOnce>
                    {children}
                </FadeAnimation>
                <Footer {...footer} />
            </RootLayout>
        )
    }

export default React.memo(PageLayout)