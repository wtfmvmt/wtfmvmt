import Contact from "@components/Contact"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { pages as pagesUtils } from "@utils/index"

export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pagesUtils()

    const page = await getPage("rsvp")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function RSVPIndexPage({ page }) {

    const { getPageProps } = pagesUtils()

    const { contact } = getPageProps(page)

    return (
        <>
            <Contact {...contact} />
        </>
    )
}

RSVPIndexPage.layout = PageLayout

export default RSVPIndexPage

