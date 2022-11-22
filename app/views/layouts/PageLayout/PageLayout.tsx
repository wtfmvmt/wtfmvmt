import Header from "@components/Header";
import Loader from "@components/Loader";
import RootLayout from "@layouts/RootLayout";
import type { LayoutProps } from "@typings/Layout";
import type { NextPage } from "next";
import React, { lazy, Suspense } from "react";
import Footer from "@components/Footer"

const PageLayout: NextPage<LayoutProps> = ({ metaData, menu, header, footer, children }: LayoutProps) => {


    const Modal = lazy(() => import("@includes/Modal"));
    const Notifications = lazy(() => import("@includes/Notifications"));
    const DrawerMenu = lazy(() => import("@includes/DrawerMenu"));
    const MagicNavigator = lazy(() => import("@includes/MagicNavigator"));


    return (
        <>
            <RootLayout metaData={metaData}>
                <Header {...header} />
                {children}
                <Footer {...footer} />
            </RootLayout>
            <Suspense fallback={<Loader />}>
                <MagicNavigator />
                <Modal />
                <Notifications />
            </Suspense>
            <DrawerMenu {...menu} />
        </>
    )
}

export default React.memo(PageLayout)