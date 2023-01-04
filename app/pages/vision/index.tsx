import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import Contact from "@components/Contact"
import { pages as pagesUtils } from "@utils/index"


export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("vision")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function VisionIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { contact } = getPageProps(page)

    return (
        <>
        </>
    )
}


VisionIndexPage.layout = PageLayout

export default VisionIndexPage

