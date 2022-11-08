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
import { PacmanLoader } from "react-spinners"
import PositionSx from "@styles/Position";


const { absolute_center: { tw: tw_center } } = PositionSx()


const PageLayout: ComponentType<LayoutProps> =
    ({ metaData, menu, header, footer, children }:
        LayoutProps) => {

        const Loader = () => {
            return (
                <div className={`${tw_center}`}>
                    <PacmanLoader color="#36d7b7" />
                </div>
            )
        }

        return (
            <Suspense fallback={<Loader />}>
                <RootLayout metaData={metaData}>
                    <Suspense fallback={<Loader />}>
                        <Header {...header} />
                        {children}
                        <MagicNavigator />
                        <Footer {...footer} />
                        <Modal />
                        <Notifications />
                        <DrawerMenu {...menu} />
                    </Suspense>
                </RootLayout>
            </Suspense>
        )
    }

export default React.memo(PageLayout)