import ImageMasonry from "@components/ImageMasonry"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { pages as pagesUtils } from "@utils/index"
import Contact from "@components/Contact"

export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("team")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function TeamIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { imageMasonry, contact } = getPageProps(page)

    return (
        <>
            <ImageMasonry {...imageMasonry} />
            <Contact {...contact} />
        </>
    )
}


TeamIndexPage.layout = PageLayout

export default TeamIndexPage

