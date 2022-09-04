import RootLayout from "@layouts/RootLayout"
import { ILayout } from "@typings/Layout"
import Header from "@components/Header"
import Footer from "@components/Footer"

const PageLayout = ({ children, metaData }: ILayout) => {

    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Analytics',
            url: '/analytics'
        },
        {

        }
    ]


    const actionLinks = [
        {
            name: 'Login',
            url: '/login'
        },
        {
            name: 'Sign Up',
            url: '/signup'
        },
        {
            name: 'Logout',
            url: '/logout'
        }
    ]

    return (
        <RootLayout metaData={metaData}>
            <Header actionLinks={actionLinks} navLinks={navLinks} user={{ name: 'Brandon Payne', role: "Owner" }} />

            {children}

            <Footer title={"WTFMVMT"} />
        </RootLayout>
    )
}

export default PageLayout