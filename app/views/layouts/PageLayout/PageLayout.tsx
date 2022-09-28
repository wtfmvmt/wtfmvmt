import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@views/includes/DrawerMenu"
import FadeAnimation from "@components/FadeAnimation"
import menu from "@configs/menu"
import ScrollToTop from "react-scroll-to-top"
import Icon from "@components/Icon"
import React from "react"

export type Layout = {
    children?: React.ReactNode,
    metaData: any,
    header: any,
    footer: any
}

const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop component={<Icon />} smooth />
            <DrawerMenu {...menu} />
            <Header {...header} />
            <FadeAnimation>
                {children}
            </FadeAnimation>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default React.memo(PageLayout)