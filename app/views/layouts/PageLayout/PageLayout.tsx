import RootLayout from "@layouts/RootLayout";


import Footer from "@components/Footer";
import Header from "@components/Header";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DrawerMenu from "@views/includes/DrawerMenu";
import FadeAnimation from "@components/FadeAnimation";
import ScrollToTop from "react-scroll-to-top";


const PageLayout = ({ children, metaData, header, footer, menu }) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop component={<ArrowDropUpIcon sx={{ color: 'purple' }} />} smooth />
            <DrawerMenu {...menu} />
            <Header {...header} />
            <FadeAnimation duration={333} triggerOnce cascade>
                {children}
            </FadeAnimation>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout