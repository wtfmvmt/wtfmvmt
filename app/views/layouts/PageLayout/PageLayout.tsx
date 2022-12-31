import Footer from "@components/Footer";
import Header from "@components/Header";
import DrawerMenu from "@includes/DrawerMenu";
import MagicNavigator from "@includes/MagicNavigator";
import Modal from "@includes/Modal";
import Notifications from "@includes/Notifications";
import RootLayout from "@layouts/RootLayout";
import type { LayoutProps } from "@typings/Layout";
import type { NextPage } from "next";
import { memo } from "react";

const PageLayout: NextPage<LayoutProps> = ({ metaData, menu, header, footer, children }: LayoutProps) => {

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