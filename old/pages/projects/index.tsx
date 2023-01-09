import PageLayout from "@layouts/PageLayout"
import PageService from "@services/page"
import { pages as pageUtils } from "@utils/index"

export async function getStaticProps() {

    const { getPage } = PageService()

    const { setPageProps } = pageUtils()

    const page = await getPage("home")

    return setPageProps({ pageData: page, revalidate: 1 })
}

function ProjectsIndexPage() {

    return (
        <>

        </>
    )
}

ProjectsIndexPage.layout = PageLayout

export default ProjectsIndexPage