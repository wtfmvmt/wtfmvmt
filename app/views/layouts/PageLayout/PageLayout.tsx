import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@views/includes/DrawerMenu";
import { Fade } from "react-awesome-reveal";
import menu from "@configs/menu"
import ScrollToTop from "react-scroll-to-top";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const PageLayout = ({ children, metaData, header, footer }) => {

    const menuConfig = menu()

    return (
        <RootLayout metaData={metaData}>

        </RootLayout>
    )
}

export default PageLayout