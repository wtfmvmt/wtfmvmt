import PageLayout from "@views/layouts/PageLayout"
import MembershipsDB from "@pages/MembershipsDB"
import TableRow from "@views/components/TableRow"
import LogoArray from "@views/components/LogoArray"
import type { IPage } from "@typings/Page"
import type { StaticPage } from "@typings/StaticPage"


const MembershipsIndexPage: IPage<StaticPage> = ({ pageData }) => {

    return (
        <PageLayout {...pageData.layout}>
            <LogoArray {...pageData.logoArray} />
            <TableRow {...pageData.tableRow} />

        </PageLayout>
    )
}


export default MembershipsIndexPage


export async function getStaticProps() {

    const pageData = await MembershipsDB.init().then((db) => db)

    return {
        props: {
            pageData: pageData
        }
    }
}