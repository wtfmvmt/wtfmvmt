import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import TableRow from "@components/TableRow"
import { pages as pagesUtils } from "@utils/index"
import Featured from "@components/Featured"
import Contact from "@components/Contact"
export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("events")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function EventsIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { tableRow, featured, contact } = getPageProps(page)

    return (
        <>
            <Featured {...featured} />
            <Contact {...contact} />
        </>
    )
}


EventsIndexPage.layout = PageLayout

export default EventsIndexPage

