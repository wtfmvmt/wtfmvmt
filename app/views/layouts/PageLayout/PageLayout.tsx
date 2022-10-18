import FadeAnimation from "@components/FadeAnimation";
import Footer from "@components/Footer";
import Header from "@components/Header";
import DrawerMenu from "@includes/DrawerMenu";
import Notifications from "@includes/Notifications";
import RootLayout from "@layouts/RootLayout";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import type { IComponent } from "@typings/Component";
import type { LayoutProps } from "@typings/Layout";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const PageLayout: IComponent<LayoutProps> =
    ({ metaData, menu, header, footer, children }:
        LayoutProps) => {

        return (
            <RootLayout metaData={metaData}>
                <ScrollToTop component={<ArrowDropUpIcon sx={{ color: 'purple' }} />} smooth />
                <Notifications />
                <DrawerMenu {...menu} />
                <Header {...header} />
                <FadeAnimation duration={250} triggerOnce cascade>
                    {children}
                </FadeAnimation>
                <Footer {...footer} />

            </RootLayout>
        )
    }

export default React.memo(PageLayout)