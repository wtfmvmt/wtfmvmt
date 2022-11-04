import Footer from "@components/Footer";
import Header from "@components/Header";
import RootLayout from "@layouts/RootLayout";
import type { ComponentType } from "@typings/Component";
import type { LayoutProps } from "@typings/Layout";
import MagicNavigator from "@views/includes/MagicNavigator";
import React, { lazy, Suspense } from "react";

const Modal = lazy(() => import("@includes/Modal"));
const Notifications = lazy(() => import("@includes/Notifications"));
const DrawerMenu = lazy(() => import("@includes/DrawerMenu"));

const PageLayout: ComponentType<LayoutProps> =
    ({ metaData, menu, header, footer, children }:
        LayoutProps) => {

        return (
            <RootLayout metaData={metaData}>
                <Header {...header} />
                {children}
                <MagicNavigator />
                <Footer {...footer} />
                <Suspense fallback={<h1>Loading</h1>}>
                    <Modal />
                    <Notifications />
                    <DrawerMenu {...menu} />
                </Suspense>
            </RootLayout>
        )
    }

export default React.memo(PageLayout)