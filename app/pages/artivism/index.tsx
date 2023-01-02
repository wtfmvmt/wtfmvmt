import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { pages as pagesUtils } from "@utils/index"
import Summary from "@views/components/Summary"


export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("artivism")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function ArtivismIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { summary } = getPageProps(page)

    return (
        <>
            <Summary {...summary} />
        </>
    )
}


ArtivismIndexPage.layout = PageLayout

export default ArtivismIndexPage

