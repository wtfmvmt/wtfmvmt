import RootLayout from "@layouts/RootLayout"
import Authenticator from "@views/components/Authenticator"
import Footer from "@components/Footer"
import authenticator from "@models/configs/authenticator"
import footer from "@configs/footer"
const AuthPage = () => {

    return (
        <RootLayout metaData={{ pageTitle: 'Auth '}}>
            <Authenticator {...authenticator}/>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default AuthPage