import Footer from "@components/Footer";
import Header from "@components/Header";
<<<<<<< HEAD
import DrawerMenu from "@includes/DrawerMenu";
import MagicNavigator from "@includes/MagicNavigator";
import Modal from "@includes/Modal";
=======
>>>>>>> parent of f0f3051... [ Last known good build ]!
import RootLayout from "@layouts/RootLayout";
import PositionSx from "@styles/Position";
import type { LayoutProps } from "@typings/Layout";
<<<<<<< HEAD
import Notifications from "@views/includes/Notifications";
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
=======
import MagicNavigator from "@views/includes/MagicNavigator";
import React, { lazy, useEffect, Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import type { NextPage } from "next";

const Modal = lazy(() => import("@includes/Modal"));
const Notifications = lazy(() => import("@includes/Notifications"));
const DrawerMenu = lazy(() => import("@includes/DrawerMenu"));

const { absolute_center: { tw: tw_center } } = PositionSx()

const PageLayout: NextPage<LayoutProps> =
    ({ metaData, menu, header, footer, children }:
        LayoutProps) => {

        useEffect(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }, [])

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
>>>>>>> parent of f0f3051... [ Last known good build ]!

export default memo(PageLayout)