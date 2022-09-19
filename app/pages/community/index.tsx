import PageLayout from "@views/layouts/PageLayout"
import MembershipsDB from "@pages/MembershipsDB"
import TableRow from "@views/components/TableRow"
import LogoArray from "@views/components/LogoArray"
import type { IPage } from "@typings/Page"
import type { StaticPage } from "@typings/StaticPage"


const CommunityIndexPage: IPage<StaticPage> = ({ pageData }) => {

    return (
        <PageLayout {...pageData.layout}>
            <LogoArray/>
            <TableRow/>

        </PageLayout>
    )
}


export default CommunityIndexPage


export async function getStaticProps() {

    const pageData = await MembershipsDB.init()

    return {
        props: {
            pageData: pageData
        }
    }
}