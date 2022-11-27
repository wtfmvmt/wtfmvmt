import Header from "@components/Header";
import Loader from "@components/Loader";
import RootLayout from "@layouts/RootLayout";
import type { LayoutProps } from "@typings/Layout";
import type { NextPage } from "next";
import React, { lazy, Suspense } from "react";
import Footer from "@components/Footer"
import Modal from "@includes/Modal"
import Notifications from "@views/includes/Notifications";
import DrawerMenu from "@includes/DrawerMenu";
import MagicNavigator from "@includes/MagicNavigator";

const PageLayout: NextPage<LayoutProps> = ({ metaData, menu, header, footer, children }: LayoutProps) => {


    return (

        <>
            <MagicNavigator />
            <Modal />
            <DrawerMenu {...menu} />
            <Notifications />
            <RootLayout metaData={metaData}>
                <Header {...header} />
                {children}
                <Footer {...footer} />
            </RootLayout>

        </>





    )
}

export default React.memo(PageLayout)