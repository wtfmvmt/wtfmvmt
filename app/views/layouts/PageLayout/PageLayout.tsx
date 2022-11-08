import Footer from "@components/Footer";
import Header from "@components/Header";
import RootLayout from "@layouts/RootLayout";
import PositionSx from "@styles/Position";
import type { LayoutProps } from "@typings/Layout";
import MagicNavigator from "@views/includes/MagicNavigator";
import React, { lazy, Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import type { NextPage } from "next";

const Modal = lazy(() => import("@includes/Modal"));
const Notifications = lazy(() => import("@includes/Notifications"));
const DrawerMenu = lazy(() => import("@includes/DrawerMenu"));

const { absolute_center: { tw: tw_center } } = PositionSx()

const PageLayout: NextPage<LayoutProps> =
    ({ metaData, menu, header, footer, children }:
        LayoutProps) => {

        const Loader = () => {
            return (
                <div className={`${tw_center}`}>
                    <PacmanLoader color="#9200CC" />
                </div>
            )
        }

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