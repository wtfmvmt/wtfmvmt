import Header from "@components/Header";
import Loader from "@components/Loader";
import RootLayout from "@layouts/RootLayout";
import type { LayoutProps } from "@typings/Layout";
import type { NextPage } from "next";
import React, { lazy, Suspense, useEffect } from "react";

const Modal = lazy(() => import("@includes/Modal"));
const Notifications = lazy(() => import("@includes/Notifications"));
const DrawerMenu = lazy(() => import("@includes/DrawerMenu"));
const MagicNavigator = lazy(() => import("@includes/MagicNavigator"));
const Footer = lazy(() => import("@components/Footer"));

const PageLayout: NextPage<LayoutProps> = ({ metaData, menu, header, footer, children }: LayoutProps) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <Suspense fallback={<Loader />}>
            <RootLayout metaData={metaData}>
                <Header {...header} />
                {children}
                <Footer {...footer} />
            </RootLayout>
            <MagicNavigator />
            <Modal />
            <Notifications />
            <DrawerMenu {...menu} />
        </Suspense>
    )
}

export default React.memo(PageLayout)