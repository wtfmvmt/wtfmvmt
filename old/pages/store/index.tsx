import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import TableRow from "@components/TableRow"
import { pages as pagesUtils } from "@utils/index"


export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("about")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function AboutIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    return (
        <>
        </>
    )
}


AboutIndexPage.layout = PageLayout

export default AboutIndexPage

