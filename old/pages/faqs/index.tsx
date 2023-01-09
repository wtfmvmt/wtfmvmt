import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import TableRow from "@components/TableRow"
import { pages as pagesUtils } from "@utils/index"
import ColumnList from "@views/components/ColumnList"
import { getPage } from "@notionhq/client/build/src/api-endpoints"

export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("faqs")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function FAQSIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { columnList } = getPageProps(page)

    return (
        <>
            <ColumnList {...columnList} />
        </>
    )
}


FAQSIndexPage.layout = PageLayout

export default FAQSIndexPage

