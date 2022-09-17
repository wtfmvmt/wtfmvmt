import Console from "@components/Console"
import Header from "@components/Header"
import header from "@configs/header"
import RootLayout from "@layouts/RootLayout"
import Notifications from "@views/components/Notifications"

import { useSession } from "next-auth/react"


const DashboardPage = ({ pageData }) => {

    const { data: session, status } = useSession()

    const isAuthenticated = status === "authenticated"

    return (
        !isAuthenticated ? <RootLayout metaData={{ pageTitle: 'Auth ' }}>
            <Header {...header} />
            <Console />
            <Notifications />

        </RootLayout> : <>Invalid Auth!</>
    )
}

export default DashboardPage

export async function getServerSideProps() {

    return {
        props: {
            pageData: []
        }
    }
}


