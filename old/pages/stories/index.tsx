import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { pages as pagesUtils } from "@utils/index"

export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("home")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function StoriesIndexPage() {

    return (
        <>

        </>
    )
}

StoriesIndexPage.layout = PageLayout

export default StoriesIndexPage