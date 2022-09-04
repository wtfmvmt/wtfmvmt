import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@views/includes/DrawerMenu";
import { Fade } from "react-awesome-reveal";


const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <DrawerMenu />
            <Header {...header} />
            <Fade>
                {children}
            </Fade>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout