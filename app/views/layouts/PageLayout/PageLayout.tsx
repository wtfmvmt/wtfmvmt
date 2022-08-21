import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"


const PageLayout = ({ children }) => {

    return (
        <RootLayout>
            {children}

            <Footer />
            
        </RootLayout>
    )
}

export default PageLayout