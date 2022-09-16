import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@views/includes/DrawerMenu";
import { Fade } from "react-awesome-reveal";
import menu from "@configs/menu"
import ScrollToTop from "react-scroll-to-top";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export type Layout = {
    children?: React.ReactNode,
    metaData: any,
    header: any,
    footer: any
}

const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop component={<ArrowDropUpIcon sx={{ color: 'black' }} />} smooth />
            <DrawerMenu {...menu} />
            <Header {...header} />
            <Fade>
                {children}
            </Fade>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout