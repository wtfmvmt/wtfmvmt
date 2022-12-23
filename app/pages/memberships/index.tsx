import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import TableRow from "@components/TableRow"
import { pages as pagesUtils } from "@utils/index"


export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("memberships")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function MembershipsIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { tableRow } = getPageProps(page)

    return (
        <>
        <TableRow {...tableRow}/>
        </>
    )
}


MembershipsIndexPage.layout = PageLayout

export default MembershipsIndexPage

