import RootLayout from "@layouts/RootLayout"
import { ILayout } from "@typings/Layout"
import Header from "@components/Header"
import Footer from "@components/Footer"

const PageLayout = ({ children, metaData }: ILayout) => {

    return (
        <RootLayout metaData={metaData}>
            <Header user={{ name: 'Brandon Payne', role: "Owner" }} />

            {children}

            <Footer />
        </RootLayout>
    )
}

export default PageLayout