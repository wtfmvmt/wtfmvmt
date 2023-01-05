import Featured from "@components/Featured"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { pages as pagesUtils } from "@utils/index"


export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("events")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function EventsIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { featured } = getPageProps(page)

    return (
        <>
            <Featured {...featured} />
        </>
    )
}


EventsIndexPage.layout = PageLayout

export default EventsIndexPage

