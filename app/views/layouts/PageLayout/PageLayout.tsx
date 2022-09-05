import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@views/includes/DrawerMenu";
import { Fade } from "react-awesome-reveal";
import menu from "@configs/menu"
import Zoom from 'react-reveal/Zoom';

const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <Zoom>

                
            </Zoom>
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