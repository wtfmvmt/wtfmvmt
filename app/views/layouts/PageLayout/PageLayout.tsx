import Header from "@components/Header";
import DrawerMenu from "@includes/DrawerMenu";
import MagicNavigator from "@includes/MagicNavigator";
import Modal from "@includes/Modal";
import RootLayout from "@layouts/RootLayout";
import type { LayoutProps } from "@typings/Layout";
import Notifications from "@views/includes/Notifications";
import type { NextPage } from "next";
import { memo } from "react";
import dynamic from 'next/dynamic'

const PageLayout: NextPage<LayoutProps> = ({ metaData, menu, header, footer, children }: LayoutProps) => {

 const Footer = dynamic(() => import('@components/Footer'), {
            loading: () => <>Hello</>
        })

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